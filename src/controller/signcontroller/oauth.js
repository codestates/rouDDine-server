require('dotenv').config();
const clientID = process.env.Naver_CLIENT_ID;
const clientSecret = process.env.Naver_CLIENT_SECRET;
const axios = require('axios');

module.exports = {

Naver : (req,res)=>{
    axios({
        method: 'post',
        url: ``,
        headers: {
          accept: `application/json`
        },
        data: {
          client_id: clientID,
          client_secret: clientSecret,
          code: req.body.authorizationCode
        }
      }).then( (response) => {
        accessToken = response.data.access_token;

        res.status(200).json({accessToken: accessToken});
      }).catch((e) => {
        res.status(404).send();
      })
    },

Google : async (req,res)=>{
  //소셜로그인 - 구글
  const userInfo = await user.findOne({
    where: { email: req.body.email, social: "google" },
  });
  if (userInfo) {
    userInfo.update({ profileimage: req.body.profileimage }); //구글 프로필 사진 바뀌었으면 반영
    const data = { ...userInfo.dataValues };
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
    //res.cookie("refreshToken", refreshToken)
    res.cookie("accessToken", accessToken, {
      httpOnly: false,
      sameSite: "None",
      secure: true,
    });
    res.status(200).send({ message: "ok" });
  } else {
    const newUser = await user.create({
      username: req.body.username,
      email: req.body.email,
      social: "google",
      socialid: req.body.socialid,
      profileimage: req.body.profileimage,
    });
    const accessToken = jwt.sign(
      {
        id: newUser.id,
        email: newUser.email,
        social: newUser.social,
        createdAt: newUser.createdAt,
      },
      process.env.ACCESS_SECRET,
      { expiresIn: "12hr" }
    );

    res.cookie("accessToken", accessToken, {
      httpOnly: false,
      sameSite: "None",
      secure: true,
    });
    res.status(200).send({ message: "ok" });
  }
}

}

