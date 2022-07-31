const { exercise } = require("../../orm/sequelize/models");
const jwt = require("jsonwebtoken");

module.exports = {
  //운동카드 생성 - post 방식
  create_exercise: async (req, res) => {
    if (!req.cookies.accessToken) {
      res.status(409).send({
        message: "invalid request",
      });
    } else {
      const token = req.cookies.accessToken;
      const data = jwt.verify(token, process.env.ACCESS_SECRET);
      //const userinfo = await user.findOne({ where : { id : data.id } });
      const newCard = await exercise.create({
        userid: data.id,
        name: req.body.name,
        set_number: req.body.set_number,
        set_time: req.body.set_time,
        rest_time: req.body.rest_time,
        memo: req.body.memo,
      });

      res.status(201).send(newCard);
    }
  },
  //운동카드 삭제 - delete 방식
};
