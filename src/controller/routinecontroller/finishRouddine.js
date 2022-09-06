const { routine } = require("../../orm/sequelize/models");
const { user } = require("../../orm/sequelize/models");

module.exports = {
  finish_Routine: async (req, res) => {
    //루틴 끝나기
    const finish_routine = await routine.findOne({
      where: { id: req.body.routine_id },
    });
    const userinfo = await user.findOne({
      where: { id: finish_routine.userid },
    });
    let time = userinfo.total_time + finish_routine.total_time;
    await userinfo.update({ total_time: time });

    let temp = finish_routine.finished_time; //루틴 완료 횟수 1증가
    temp += 1;
    let finishtime =
      finish_routine.total_time + finish_routine.finished_total_time; //루틴 운동시간 증가
    await finish_routine.update({
      finished_time: temp,
      finished_total_time: finishtime,
    });
    res.status(200).send({
      message: "finish ok",
      result: finish_routine,
    });
  },
};
