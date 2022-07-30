const { routinepart } = require("../../orm/sequelize/models");
const { routine } = require("../../orm/sequelize/models");

module.exports = {
  //루틴 생성 - post

  delete_Routine: async (req, res) => {
    //루틴 삭제하기 - delete
    if (!req.query.routine_id) {
      res.status(405).send({
        message: "invalid request1",
      });
    } else {
      const card = await routine.findOne({
        where: { id: req.query.routine_id },
      });
      if (card) {
        const parts = await routinepart.findAll({
          where: { routinename: req.query.routine_id },
        });
        for (let i = 0; i < parts.length; i++) {
          parts[i].destroy();
        }
        card.destroy();
        res.status(200).send({
          message: "delete routine",
        });
      } else {
        res.status(409).send({
          message: "invalid request2",
        });
      }
    }
  },
};
