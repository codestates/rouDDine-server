require("dotenv").config();
const { exercise } = require("../../orm/sequelize/models");
const jwt = require("jsonwebtoken");


module.exports = {
  //운동카드 생성 - post 방식
  create_exercise: async (req, res) => {
    try{
      const token = req.cookies.accessToken;
      const data = jwt.verify(token, process.env.ACCESS_SECRET);
      const newCard = await exercise.create({
        userid: data.id,
        name: req.body.name,
        set_number: req.body.set_number,
        set_time: req.body.set_time,
        rest_time: req.body.rest_time,
        memo: req.body.memo,
      });
      if(token){
        res.status(201).send(newCard);
      }
    }catch{
      res.status(409).send({
        message: "invalid request",
      });
    }
  }
};
