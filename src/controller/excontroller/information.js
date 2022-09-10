require("dotenv").config();
const { exercise } = require("../../orm/sequelize/models");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");

module.exports = {
  //운동카드 불러오기 - get방식
  info_exercise: async (req, res) => {
    try{
      if(req.cookies.accessToken){
      const token = req.cookies.accessToken;
      const data = jwt.verify(token, process.env.ACCESS_SECRET);
      let every_card = await exercise.findAll({
        where: {
          [Op.or]: [
            { userid: data.id },
            //{default : true}
          ],
        },
      });
      res.status(200).json({
        message: "request success",
          result: every_card
      })
    }
    }catch{
      res.status(409).send({
        message: "no result. create card",
      });
    }
  },
};
