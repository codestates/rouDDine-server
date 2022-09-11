require("dotenv").config();
const { exercise } = require("../../orm/sequelize/models");

module.exports = {
  //운동카드 수정하기 - patch방식
  update_exercise: async (req, res) => {
    // const { workoutId } = req.body
    const {name,set_time,set_number,rest_time} = req.body;
    const ex_card = await ex_card.update({
      name : name,
      set_time : set_time,
      set_number: set_number,
      rest_time : rest_time,
      memo : memo
    });

    try{
      // 워크아웃 아이디는 논외로 .. 409로 내보내주자
      // 기본 운동카드를 수정하려 할 경우 ?  기본 운동카드는 수정 불가입니다
      // 운동카드가 수정되었습니다
      // 운동카드 수정을 실패하였습니다. 
        if(!ex_card.default) {
          return res.status(200).send({
            "message" : "update exersice card",
            "result" : ex_card
          })
        }
    }catch(err){
      switch(err.status){
        case 400: {
          return res.status(400).send({ "message" : "기본 운동은 수정 불가입니다.", "result" : ex_card })
        }
        case 409: {
          res.status(409).send({
            "message" : "update fail"
          })
        }
      }
    }
 }
}
   