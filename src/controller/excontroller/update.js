const { exercise } = require("../../entities/models/")

module.exports = {
 //운동카드 수정하기 - patch방식
 update_exercise: async (req, res) => {
    if(!req.body.workoutid){
      res.status(409).send({
        "message" : "invalid request"
      })
    }
    else{
      const ex_card = await exercise.findOne({
        where : { id : req.body.workoutid }
      })
      if(ex_card){
        if(ex_card.default === true){
          res.status(200).send({
            "message" : "기본 운동은 수정 불가입니다.",
            "result" : ex_card
          })
        }
        else{
          await ex_card.update({
            name : req.body.name,
            set_time : req.body.set_time,
            set_number: req.body.set_number,
            rest_time : req.body.rest_time,
            memo : req.body.memo
          });
          res.status(200).send({
            "message" : "update exersice card",
            "result" : ex_card
          })
        }
      }
      else{
        res.status(409).send({
          "message" : "update fail"
        })
      }
    }    
  },
}