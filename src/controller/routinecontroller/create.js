const { routine } = require("../../orm/sequelize/models");
const jwt = require("jsonwebtoken");
// 새로운 루틴 생성
module.exports = {
  create_Routine: async (req, res) => {
    if (!req.cookies.accessToken) {
      res.status(405).send({
        message: "invalid request",
      });
    } else {
      const token = req.cookies.accessToken;
      const data = jwt.verify(token, process.env.ACCESS_SECRET);
      const newRoutine = await routine.create({
        name: "새 루틴",
        userid: data.id,
        finished_time: 0,
        share: "false",
        finished_total_time: 0,
      });

      res.status(201).send({
        message: "created",
      });
    }
  },
};
