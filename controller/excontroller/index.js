const { exercise } = require("../../models")

module.exports = {
  //운동카드 생성 - post 방식
  create_exercise: async (req, res) => {
    if(!req.body.userid){
      res.status(409).send({
        "message" : "invalid request"
      })
    }
    else{
      const newCard = await exercise.create({ 
        userid: req.body.userid, 
        name : req.body.name, 
        set_time: req.body.set_time,
        rest_time: req.body.rest_time,
        memo : req.body.memo
      });

      res.status(201).send(newCard);
    }
  },
  //운동카드 삭제 - delete 방식
  delete_exercise: async (req, res) => {
    const card = await exercise.findOne({
      where : { id : req.query.id }
    })
    if(card){
      card.destroy();
      res.status(200).send({
        "message" : "delete card"
      })
    }
    else{
      res.status(409).send({
        "message" : "not found card"
    })
    }
  },
  //운동카드 불러오기 - get방식
  info_exercise: async (req, res) => {
    let every_card = await exercise.findAll({
      where : { userid : req.query.userid}
    })
    if(every_card.length !== 0){
      res.status(200).send({
        "message" : "request success",
        "result" : every_card
      })
    }
    else{
      res.status(409).send({
        "message" : "no result. create card"
    })
    }
  },
  //운동카드 수정하기 - patch방식
  update_exercise: async (req, res) => {
    const ex_card = await exercise.findOne({
      where : { id : req.body.workoutid }
    })
    if(ex_card){

      await ex_card.update({
        name : req.body.name,
        set_time : req.body.set_time,
        rest_time : req.body.rest_time,
        memo : req.body.memo
      });
      res.status(200).send({
        "message" : "update exersice card",
        "result" : ex_card
      })
      
    }
    else{
      res.status(409).send({
        "message" : "update fail"
      })
    }
  }
}