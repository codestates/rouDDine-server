require("dotenv").config();

const jwt = require('jsonwebtoken');
const { user } = require("../../models");
const { routine } = require("../../models");
const { routinepart } = require("../../models");
const { exercise } = require("../../models");
const bcrypt = require("bcrypt");
const salt = process.env.DATABASE_SALT

module.exports = {
  // 회원가입
  signUpController: async (req, res) => {
  
    const { username, email, password} = req.body;
    console.log('salt :', salt)
    if( !(username && email && password) ){
      res.status(405).send({
        "message" : "invalid request"
      });
    }
    else{
      const userInfo = await user.findOne({
        where: {
              email: email,
              username : username
        }
      });

      if(userInfo === null){
        
        const newUser = await user.create({ 
            username,
            email, 
            password: bcrypt.hashSync(password, salt), 
            
          });

          let response = {  
            username: newUser.username,
            email: newUser.email,
            username: newUser.username,
            password : newUser.password
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
  },

  login : async(req,res)=>{
    const { email, password } = req.body;

    const userInfo = await user.findOne({
      where: {
            email
      }
    });
    // console.log("req: ", req)
    if(!userInfo) {
      await res.status(400).send({data : null, message : 'not authorized'})
    }
      else {
          const data = {...userInfo.dataValues}
          // console.log('password:', checkMail.password)
          bcrypt.compareSync(password, data.password) ;  

          delete data.password

          const accessToken = jwt.sign(data, process.env.ACCESS_SECRET, {expiresIn : '3h'}) // create jwt 
          const refreshToken = jwt.sign(data, process.env.REFRESH_SECRET, {expiresIn : '1h'}) //  save in cookie .
       
        res.cookie("refreshToken", refreshToken) 
        res.status(200).send({data:{"accessToken": accessToken}, message:'ok'})
    }
  }
  
};



