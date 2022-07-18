const { exercise } = require("../../entities/models/exercise")
const jwt = require('jsonwebtoken');
const { Op } = require("sequelize");

module.exports = {
 //운동카드 불러오기 - get방식
 info_exercise: async (req, res) => {
    if(req.cookies.accessToken !== ''){
      const token = req.cookies.accessToken
      const data = jwt.verify(token, process.env.ACCESS_SECRET);
      let every_card = await exercise.findAll({
        where : {
          [Op.or] : [
            {userid : data.id},
            //{default : true}
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
}