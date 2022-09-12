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
          return res.status(409).send({
            "message" : "update fail"
          })
        }
      }
    }
 }
}
   