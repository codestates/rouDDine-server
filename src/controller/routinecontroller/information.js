const { routinepart } = require("../../orm/sequelize/models");
const { routine } = require("../../orm/sequelize/models");
const { exercise } = require("../../orm/sequelize/models");
const { user } = require("../../orm/sequelize/models");
const jwt = require("jsonwebtoken");

module.exports = {
  info_Routine: async (req, res) => {
    //루틴 불러오기 - get 방식
    if (!req.cookies.accessToken || req.cookies.accessToken === "") {
      //기본 생성된 루틴 불러오기 - 한번도 로그인안했거나 로그아웃 한 상태
      const finduser = await user.findOne({ where: { id: 1 } });
      if (finduser) {
        const userRoutine = await routine.findAll({
          where: { userid: req.query.userid },
        });
        if (userRoutine.length === 0) {
          //생성된 루틴이 없는 경우
          res.status(200).send({
            message: "please create routine",
          });
        } else {
          res.status(200).send({
            message: "search success",
            result: userRoutine,
          });
        }
      } else {
        //없는 유저일 경우
        res.status(409).send({
          message: "cannot find user",
        });
      }
    }
    //루틴 이름이 없는 경우 유저 한 사람의 모든 루틴을 보냄
    else if (!req.query.routine_id) {
      const token = req.cookies.accessToken;
      const data = jwt.verify(token, process.env.ACCESS_SECRET);
      const finduser = await user.findOne({ where: { id: data.id } }); //id수정
      if (finduser) {
        const routineCard = await routine.findAll({
          where: { userid: data.id },
        });
        if (routineCard.length === 0) {
          //생성된 루틴이 없는 경우
          res.status(200).send({
            message: "please create routine",
          });
        } else {
          //루틴 찾은 경우
          let initialData = [];
          for (let i = 0; i < routineCard.length; i++) {
            const routineparts = await routinepart.findAll({
              where: { routinename: routineCard[i].id },
            });
            let routineData = {};
            routineData.id = routineCard[i].id;
            routineData.name = routineCard[i].name;
            routineData.userid = routineCard[i].userid;
            routineData.finished_time = routineCard[i].finished_time;
            routineData.share = routineCard[i].share;
            routineData.tasks = [];

            for (let j = 0; j < routineparts.length; j++) {
              //정렬된 순서대로 운동 정보 tasks 에 저장
              let workout = await exercise.findOne({
                where: { id: routineparts[j].exercise_name },
              });
              let temp = {
                id: String(workout.id),
                name: workout.name,
                set_number: workout.set_number,
                set_time: workout.set_time,
                rest_time: workout.rest_time,
                memo: workout.memo,
              };
              routineData.tasks.push(temp);
            }
            initialData.push(routineData);
          }
          res.status(200).send(initialData);
        }
      } else {
        //없는 유저일 경우
        res.status(409).send({
          message: "cannot find user",
        });
      }
    }
    //루틴 이름이 있는 경우 하나를 클릭한 경우 -> 받은 루틴의 id를 검색하여 보냄.
    else {
      const routineCard = await routine.findOne({
        where: { id: req.query.routine_id },
      });
      const routineparts = await routinepart.findAll({
        where: { routinename: req.query.routine_id },
      });
      if (!routineCard) {
        //루틴 있는지 검사
        res.status(409).send({
          message: "cannot find routine. please check routine name",
        });
      } else {
        const userid = routineCard.userid;
        //let temparray = [];
        let workout = [];
        let columns = {
          "column-1": {
            id: "column-1",
            title: "저장된 운동",
            taskIds: [],
          },
          "column-2": {
            id: "column-2",
            title: "오늘 할 운동",
            taskIds: [],
          },
        };
        let temparr = []; //순서
        let temparr2 = []; //값비교용
        for (let i = 0; i < routineparts.length; i++) {
          let ex = await exercise.findOne({
            where: { id: routineparts[i].exercise_name },
          });
          workout.push({
            id: ex.id,
            name: ex.name,
            set_number: ex.set_number,
            set_time: ex.set_time,
            rest_time: ex.rest_time,
          });
        }
        const responseCard = {
          id: routineCard.id,
          name: routineCard.name,
          userid: routineCard.userid,
          finished_time: routineCard.finished_time,
          share: routineCard.share,
          tasks: workout,
        };

        res.status(200).send(responseCard);
      }
    }
  },
};
