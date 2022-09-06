const { routinepart } = require("../../orm/sequelize/models");
const { routine } = require("../../orm/sequelize/models");
const { exercise } = require("../../orm/sequelize/models");

module.exports = {
  
  update_Routine: async (req, res) => {
    //루틴 수정하기 - patch
    if (!req.body.routine_id) {
      res.status(405).send({
        message: "invalid request",
      });
    } else {
      //루틴아이디로 생성된 루틴 찾기
      const routinecard = await routine.findOne({
        where: { id: req.body.routine_id },
      });
      if (routinecard) {
        let time = 0;
        if (req.body.exercise_array) {
          if (req.body.exercise_array.length !== 0) {
            //운동수정하는경우
            //기존에 운동 데이터가 있었다면 삭제
            const parts = await routinepart.findAll({
              where: { routinename: req.body.routine_id },
            });
            if (parts) {
              for (let i = 0; i < parts.length; i++) {
                parts[i].destroy();
              }
            }
            //새로운 운동카드 루틴에 입력

            for (let i = 0; i < req.body.exercise_array.length; i++) {
              let ex = await exercise.findOne({
                where: { id: req.body.exercise_array[i] },
              });
              time += (ex.set_time + ex.rest_time) * ex.set_number; //운동 총 시간 계산

              const newPart = await routinepart.create({
                userid: routinecard.userid,
                routinename: routinecard.id,
                exercise_name: req.body.exercise_array[i],
                order: i + 1,
              });
            }
          }
        }

        await routinecard.update({
          share: req.body.share,
          name: req.body.routine_name,
          total_time: time,
        });

        res.status(200).send({
          message: "success",
          result: routinecard,
        });
      } else {
        res.status(409).send({
          message: "invalid request2",
        });
      }
    }
  },
};
