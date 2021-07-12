const { exercise } = require("../../models")
const { routineparts } = require("../../models")
const jwt = require('jsonwebtoken');
const { Op } = require("sequelize");

module.exports = {
  //운동카드 생성 - post 방식
  create_exercise: async (req, res) => {
    if(!req.cookies.accessToken){
      res.status(409).send({
        "message" : "invalid request"
      })
    }
    else{
      const token = req.cookies.accessToken
      const data = jwt.verify(token, process.env.ACCESS_SECRET);
      //const userinfo = await user.findOne({ where : { id : data.id } });
      const newCard = await exercise.create({ 
        userid: data.id, 
        name : req.body.name,
        set_number: req.body.set_number,
        set_time: req.body.set_time,
        rest_time: req.body.rest_time,
        memo : req.body.memo
      });

      res.status(201).send(newCard);
    }
  },
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
  //운동카드 불러오기 - get방식
  info_exercise: async (req, res) => {
    if(req.cookies.accessToken !== ''){
      const token = req.cookies.accessToken
      const data = jwt.verify(token, process.env.ACCESS_SECRET);
      let every_card = await exercise.findAll({
        where : {
          [Op.or] : [
            {userid : data.id},
            {default : "true"}
          ]
        }
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
    }
    else{ //로그인 안했을 때 , 기본 생성된 유저 1의 요소 보내기
      let every_card = await exercise.findAll({
        where : { userid : 1}
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
    }
  },
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