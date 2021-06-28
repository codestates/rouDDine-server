const jwt = require('jsonwebtoken');
const { Op } = require("sequelize");
const { user } = require("../../models");


module.exports = {
  signUpController: async (req, res) => {
    if( !(req.body.username && req.body.email && req.body.password) ){
      res.status(405).send({
        "message" : "invalid request"
      });
    }
    else{

      const userInfo = await user.findOne({
        where: {
          [Op.or] : [
            {
              email: req.body.email
            },
            {
              username : req.body.username
            }
          ]
        }
      });
      if(userInfo === null){
        const newUser = await user.create({ 
          username: req.body.username, 
          email : req.body.email, 
          password: req.body.password, 
        });
        let response = {  
          username: newUser.username,
          email: newUser.email,
          username: newUser.username
        }
        res.status(201).json( response );
      }
      else{
        res.status(409).send({
            "message" : "email already exist"
        });
      }
    }
  },






  logInController: async (req, res) => {
  try{
    const userInfo = await user.findOne({
      where: { email : req.body.email, password: req.body.password },
    });
    if (!userInfo) {
      res.status(401).send("Invalid user or Wrong password");
    }
    else {
      const token = jwt.sign({
        email: userInfo.email
      }, process.env.ACCESS_SECRET, { expiresIn: '1m' });
      const refreshToken = jwt.sign({
        email: userInfo.email
      }, process.env.REFRESH_SECRET, { expiresIn: '1d' });
      let response = {  
        id: userInfo.id,
        username: userInfo.username,
        email: userInfo.email,
        password: userInfo.password,
        deal_count: userInfo.deal_count,
      }
      res.status(200).json({ 
        response, 
        result: { 
          access_token: token
        }
      });
    }
  } catch(err){
    res.status(500).send(err)
  }

  },
  userInfoController: async (req, res) => {
    try{
      let authorization = req.headers['authorization'];
      const tokenCheck = authorization.split(' ')[1];
      console.log("tokenCheck : " + tokenCheck)
      const data = jwt.verify(tokenCheck, process.env.ACCESS_SECRET, {ignoreExpiration: true});
      if(!req.headers['authorization']){
        res.status(404).send("your account not exsist!!!")
      }
      const userInfo = await user.findOne({
        where: { email : data.email },
      });
      if(data.exp * 1000 < Date.now()){
        const token = jwt.sign({
          email: userInfo.email
        }, process.env.ACCESS_SECRET, { expiresIn: '1m' });
        let response = {  
          id: userInfo.dataValues.id,
          email: userInfo.dataValues.email,
          password: userInfo.dataValues.password,
          username: userInfo.dataValues.username,
          deal_count: userInfo.dataValues.deal_count,
          createdAt: userInfo.dataValues.created_time,
          updatedAt: userInfo.dataValues.updated_time
        }
        res.status(200).json({ 
          response, 
          result: { 
            access_token: token,
          }
        });
      }
      else{
          let response = {  
            id: userInfo.dataValues.id,
            email: userInfo.dataValues.email,
            password: userInfo.dataValues.password,
            username: userInfo.dataValues.username,
            deal_count: userInfo.dataValues.deal_count,
            createdAt: userInfo.dataValues.created_time,
            updatedAt: userInfo.dataValues.updated_time
          }
          res.status(200).json( response )
      } 
    }
    catch(err){
      return res.status(500).send(err);
    } 
  },
  signOutController: (req, res) => {
    try{
      res.status(200).json({result: { access_token: "" }}).send("See you next time!");
    }
    catch(err){
    }
  },
  
  updateUserinfo: async (req, res) => {
    let newname = req.body.username;
    let newpassword = req.body.password;
    const userinfo = await user.findOne({ where : { email : req.body.email } });
    if(userinfo){
      await userinfo.update({ username : newname, password : newpassword });
      res.status(200).send( userinfo );
    }
    else{
      res.status(500).send("정보 업데이트 실패")
    }
  },
  dealController: async (req, res ) => {
    try {
      const userInfo = await user.findOne({
        where: { username : req.body.writerid },
      });
      const deal_count = userInfo.deal_count;
      let update_deal_count = Number(deal_count)
      update_deal_count++;
      const updateUserInfo = await user.update({
        deal_count : update_deal_count
      },{
        where : {username: req.body.writerid}
      })
      res.status(200).send(updateUserInfo)
    } catch(err){
      res.status(500).send(err)
  }
  },
};

