const { routine } = require("../../orm/sequelize/models");

module.exports = {
  //공유된 루틴들 가져오기 - get방식
  getSharedRoutines: async (req, res) => {
    let sharedroutines = await routine.findAll({
      where: { share: true },
    });
    if (sharedroutines.length === 0) {
      //공유된 루틴이 없을 때
      res.status(409).send({
        message: "shared routines not exist",
      });
    } else {
      //공유된 루틴이 있을 때
      res.status(200).send({
        message: "request success",
        result: sharedroutines,
      });
    }
  },
};
