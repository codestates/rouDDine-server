require("dotenv").config();
const jwt = require("jsonwebtoken");
const { user } = require("../../orm/sequelize/models/");
const { routine } = require("../../orm/sequelize/models/");
const { exercise } = require("../../orm/sequelize/models/");
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

    const { username}  = req.body
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
  WithdrawalController: async (req, res) => {

    try{
      // 회원 탈퇴가 될 경우 
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
    }catch(err){
      res.status(405).send({
        message: "invalid request",
      });
    }
  },

  userInfo: async (req, res) => {
    //유저정보
    try{
      const token = req.cookies.accessToken;
      const data = jwt.verify(token, process.env.ACCESS_SECRET);
      const userInfo = await user.findOne({ where: { id: data.id } });
      if(userInfo) {
        return res.status(200).json(userInfo)
      }
    }catch(err){
      console.log(err)
      return res.status(409).json({
        message: "not exist user",
      })
    }
  },
  
  updateUser: async (req, res) => {
    
    console.log(req.cookies);
    try{
      // 유저 정보 수정
      const token = req.cookies.accessToken;
      const data = jwt.verify(token, process.env.ACCESS_SECRET);
      const userInfo = await user.findOne({ where: { id: data.id } });
      if(userInfo) {
        await userInfo.update({
          username: req.body.username,
          gender: req.body.gender,
          age: req.body.age,
          height: req.body.height,
          weigt: req.body.weigt,
          profileimage: req.body.profileimage,
        });
        return res.status(200).send(userInfo);
      }
      }catch(err){
      // 수정이 되지 않음.
      console.log("err :", err)
      return res.status(405).json({message : "invalid request"})
      }
  },
  login: async (req, res) => {
  
      const { email, password} = req.body
      const userInfo = await user.findOne({
        where: {
          email,
          social: null,
        },
      });
      console.log('userInfo :', userInfo.dataValues)
      console.log('hashed :', userInfo.dataValues.password)
      try{
      // 유저 정보를 찾는다. 정보가 있다면 ? 바로 비밀번호를 비교해준다
      // 그리고 토큰을 준다. 
      const hashed = userInfo.dataValues.password
        if(userInfo){
          const hash = bcrypt.compareSync(password, hashed);
          if(hash){
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
              res.cookie("accessToken", accessToken, {
                httpOnly: false,
                sameSite: "None",
                secure: true,
              });
              res.status(200).json({ message: "ok" });
            }
          }
    }catch{
      // 하지만 토큰이 없거나 비밀번호가 틀리다면 ?
      // 해당 유저에게 권한이 없습니다. 
      res.status(400).json({data : null, message : "not authorized"})
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
    try {
      for (let i = 0; i < notSave_excard.length; i++) {
        notSave_excard[i].destroy();
      }
      res.cookie("accessToken", "");
      res.status(200).json({ message: "logout ok" });
    }catch(err){
      res.status(400).json({ message : `${err} , 로그아웃에 실패하였습니다.`})
    }      
  },
};
