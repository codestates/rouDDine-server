require("dotenv").config();
const jwt = require("jsonwebtoken");
const { user } = require("../../orm/sequelize/models");
const { routine } = require("../../orm/sequelize/models");
const { exercise } = require("../../orm/sequelize/models");
const bcrypt = require("bcrypt");
const salt = process.env.DATABASE_SALT;
const { Op } = require("sequelize");

module.exports = {
  // 회원가입
  signUpController: async (req, res) => {
    const { username, email, password, social } = req.body
    const userInfo = await user.findOne({
        where: {
            email: email,
            username: username,
            social: social
        },
    });

    try {
        if (userInfo) {
            return res.status(401).json({ message: "already exist" });
        }
        const newUser = await user.create({
            username,
            email,
            social: null,
            password: bcrypt.hashSync(password, salt),
            profileimage: "default",
            total_time: 0,
        });
        return res.status(200).json(newUser);
    }
    catch (err) {
        return res.status(400).json({ message: "invalid access" });
    }
},

  //비회원 회원가입
  tempsignup: async (req, res) => {

    const { username, social} = req.body
    const userInfo = await user.findOne({
      where: {
          username: username
      },
  });

    try{
      if (userInfo) {
        return res.status(200).json({ message: "로그인 되었습니다." });
    }
        const newUser = await user.create({
          username: username,
          social: "temp",
        });
        const accessToken = jwt.sign(
          {
            username: newUser.username,
            social: newUser.social,
            createdAt: newUser.createdAt,
          },
          process.env.ACCESS_SECRET,
          { expiresIn: "6hr" }
        );
          // 쿠키에 접근가능한 토큰을 넣어준다.
        res.cookie("accessToken", accessToken, {
          httpOnly: false,
          sameSite: "None",
          secure: true,
        });
        return res.status(200).json(newUser);
    }catch(err){
      return res.status(400).json({ message: "invalid access" });
    }
},

  //회원탈퇴
  WithdrawalConstroller: async (req, res) => {
    if (!req.cookies.accessToken) {
      res.status(405).send({
        message: "invalid request",
      });
    } else {
      const token = req.cookies.accessToken;
      const data = jwt.verify(token, process.env.ACCESS_SECRET);
      const userInfo = await user.findOne({ where: { id: data.id } });

      if (userInfo) {
        //루틴 삭제하기
        let card = await routine.findOne({
          where: { userid: userInfo.id },
        });
        while (card) {
          card.destroy();
          card = await routine.findOne({
            where: { userid: userInfo.id },
          });
        }
        //운동 삭제하기
        const excard = await exercise.findAll({
          where: { userid: userInfo.id },
        });
        for (let i = 0; i < excard.length; i++) {
          excard[i].destroy();
        }
        userInfo.destroy();
        res.status(200).send({
          message: "withdrawal OK",
        });
      } else {
        res.status(409).send({
          message: "cannot find user. please check email and password",
        });
      }
    }
  },

  userInfo: async (req, res) => {
    //유저정보
    if (!req.cookies.accessToken) {
      res.status(405).send({
        message: "invalid request",
      });
    } else {
      const token = req.cookies.accessToken;
      const data = jwt.verify(token, process.env.ACCESS_SECRET);
      const userinfo = await user.findOne({ where: { id: data.id } });
      if (!userinfo) {
        res.status(409).send({
          message: "not exist user",
        });
      } else {
        res.status(200).send(userinfo);
      }
    }
  },
  
  updateUser: async (req, res) => {
    //유저정보수정
    console.log(req.cookies);
    if (!req.cookies.accessToken) {
      res.status(405).send({
        message: "invalid request",
      });
    } else {
      const token = req.cookies.accessToken;
      const data = jwt.verify(token, process.env.ACCESS_SECRET);
      const userinfo = await user.findOne({ where: { id: data.id } });
      if (!userinfo) {
        res.status(409).send({
          message: "not exist user",
        });
      } else {
        await userinfo.update({
          username: req.body.username,
          gender: req.body.gender,
          age: req.body.age,
          height: req.body.height,
          weigt: req.body.weigt,
          profileimage: req.body.profileimage,
        });
        res.status(200).send(userinfo);
      }
    }
  },
  // 로그인 토큰
  login: async (req, res) => {
    console.log(user);
    if (req.body.social === null) {
      const { email, password } = req.body;
      const aa = await bcrypt.hashSync(password, salt);
      // 해싱해주는것을 추가해줌 .

      const userInfo = await user.findOne({
        where: {
          email,
          social: null,
        },
      });
      console.log("user :", user);
      if (!userInfo) {
        await res.status(400).send({ data: null, message: "not authorized" });
      } else {
        const data = { ...userInfo.dataValues };
        // 해쉬,
        const bool = bcrypt.compareSync(password, data.password);
        // 결과값을 저장해주는곳이 없엇음. 비밀번호가 맞는지 틀린지
        // 비밀번호 검사코드는 있는데 결과에 따라 나뉘는것이없음.
        // 조건문을 해줘야함.
        if (bool) {
          delete data.password;

          const accessToken = jwt.sign(
            {
              id: userInfo.id,
              email: userInfo.email,
              social: userInfo.social,
              createdAt: userInfo.createdAt,
            },
            process.env.ACCESS_SECRET,
            { expiresIn: "12hr" }
          );

          const refreshToken = jwt.sign(data, process.env.REFRESH_SECRET, {
            expiresIn: "1h",
          }); //  save in cookie .
          let response = {
            id: userInfo.id,
            username: userInfo.username,
            email: userInfo.email,
            password: userInfo.password,
          };
          //res.cookie("refreshToken", refreshToken)
          res.cookie("accessToken", accessToken, {
            httpOnly: false,
            sameSite: "None",
            secure: true,
          });
          res.status(200).send({ message: "ok" });
        }
      }
    }
  },

  logout: async (req, res) => {
    const token = req.cookies.accessToken;
    const data = jwt.verify(token, process.env.ACCESS_SECRET);
    const notSave_excard = await exercise.findAll({
      where: {
        [Op.and]: [{ userid: data.id }, { routine_id: null }],
      },
    });
    for (let i = 0; i < notSave_excard.length; i++) {
      notSave_excard[i].destroy();
    }

    res.cookie("accessToken", "");
    res.status(200).send({ message: "logout ok" });
  },
};
