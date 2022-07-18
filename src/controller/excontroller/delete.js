const { exercise } = require("../../entities/models/exercise")
const { routineparts } = require("../../entities/models/routinepart")
const jwt = require('jsonwebtoken');

module.exports = {
 //운동카드 삭제 - delete 방식
delete_exercise: async (req, res) => {
    if(!req.query.workoutid){
      res.status(409).send({
        "message" : "invalid request"
      })
    }
    else{
      const card = await exercise.findOne({ //워크아웃 찾기
        where : { id : req.query.workoutid }
      })
      if(card){//워크아웃 삭제 전 루틴에서 워크아웃 삭제
        const parts = await routineparts.findAll({
          where : { exercise_name : req.query.workoutid }
        })
        for(let i=0; i<parts.length; i++){
          parts[i].destroy();
        }

        card.destroy();//운동카드 삭제
        //삭제 후 남은 운동카드 보내기
        const token = req.cookies.accessToken1
        const data = jwt.verify(token, process.env.ACCESS_SECRET);
        const remainexercises = await exercise.findAll({ where : { userid : data.id } });
        res.status(200).send({
          "message" : "delete card",
          result : remainexercises
        })
      }
      else{
        res.status(409).send({
          "message" : "not found card"
      })
      }
    }
  },
}