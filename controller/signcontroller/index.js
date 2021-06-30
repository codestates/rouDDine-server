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
              email: req.body.email,
              username : req.body.username
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
  WithdrawalConstroller : async (res, req) => {
    if( !(req.body.username && req.body.email && req.body.password) ){
      res.status(405).send({
        "message" : "invalid request"
      });
    }
    else{
      //토큰 기반으로 수정해야 함
      const userInfo = await user.findOne({
        where: {
              email: req.body.email,
              password : req.body.password
        }
      });
      if(userInfo){
        userInfo.destroy();
        res.status(200).send({
          "message" : "withdrawal OK"
        });
      }
      else{
        res.status(409).send({
          "message" : "cannot find user. please check email and password"
        });
      }
    }
  }
};

