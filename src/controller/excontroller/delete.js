require("dotenv").config();
const { exercise } = require("../../orm/sequelize/models");
const { routineparts } = require("../../orm/sequelize/models");
const jwt = require("jsonwebtoken");

module.exports = {
  //운동카드 삭제 - delete 방식
  delete_exercise: async (req, res) => {
    const card = await exercise.findOne({
        //워크아웃 찾기
        where: { id: req.query.workoutid },
      })

    try{
      if(card){
        const parts = await routineparts.findAll({
          where: { exercise_name: req.query.workoutid },
        });
        for (let i = 0; i < parts.length; i++) {
          parts[i].destroy();
        }
        card.destroy(); //운동카드 삭제
        //삭제 후 남은 운동카드 보내기
        const token = req.cookies.accessToken1;
        const data = jwt.verify(token, process.env.ACCESS_SECRET);
        const remainexercises = await exercise.findAll({
          where: { userid: data.id },
        });
        res.status(200).send({
          message: "delete card",
          result: remainexercises,
        });
      }
    } catch {
      res.status(409).send({
        message: "invalid request",
      });
    }
  },
};
