const jwt = require('jsonwebtoken');
const { user } = require("../../models");
const { routine } = require("../../models");
const { routinepart } = require("../../models");
const { exercise } = require("../../models");


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
  WithdrawalConstroller : async (req, res) => {
    if( !(req.query.user_id) ){
      res.status(405).send({
        "message" : "invalid request"
      });
    }
    else{
      const userInfo = await user.findOne({
        where: {
              id: req.query.user_id
        }
      });
      if(userInfo){
        //루틴 삭제하기
        let card = await routine.findOne({
          where : { userid : req.query.user_id }
        })
        while(card){
            const parts = await routinepart.findAll({
              where : { userid : req.query.user_id }
            })
            for(let i = 0; i<parts.length; i++){
              parts[i].destroy();
            }
            card.destroy();

            card = await routine.findOne({
              where : { userid : req.query.user_id }
            })
        }
        //운동 삭제하기
        const excard = await exercise.findAll({
          where : { userid : req.query.user_id }
        })
        for(let i = 0; i<excard.length; i++){
          excard[i].destroy();
        }

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
  },
  userInfo : async (req, res) => {
    if(!(req.query.user_id)){
      res.status(405).send({
        "message" : "invalid request"
      });
    }
    else{
      const userinfo = await user.findOne({ where : { id : req.query.user_id } });
      if(!userinfo){
        res.status(409).send({
          "message" : "not exist user"
        });
      }
      else{
        res.status(200).send( userinfo );
      }
    }
  },
  updateUser : async (req, res) => {
    if(!(req.body.user_id)){
      res.status(405).send({
        "message" : "invalid request"
      });
    }
    else{
      const userinfo = await user.findOne({ where : { id : req.body.user_id } });
      if(!userinfo){
        res.status(409).send({
          "message" : "not exist user"
        });
      }
      else{
        await userinfo.update({ username : req.body.username, password : req.body.password });
        res.status(200).send( userinfo );
      }
    }
  }
};

