require("dotenv").config();

const jwt = require('jsonwebtoken');

const { user } = require("../../models");
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
  // 회원탈퇴
  WithdrawalConstroller : async (res, req) => {
    if( !(req.body.username && req.body.email && req.body.password) ){
      res.status(405).send({
        "message" : "invalid request"
      });
    }
    else{

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



