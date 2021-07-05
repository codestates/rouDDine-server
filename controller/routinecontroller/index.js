const { routinepart } = require("../../models");
const { routine } = require("../../models");
const { exercise } = require("../../models");
const { user } = require("../../models");

module.exports = { //루틴 생성 - post
  create_Routine: async (req, res) => {
    let findcard = await routine.findOne({
      where : { userid : req.body.userid, name : req.body.routine_name }
    })
    if( !(req.body.routine_name && req.body.userid && req.body.share) ){
      res.status(405).send({
        "message" : "invalid request"
      });
    }
    else if(!findcard){
      const newRoutine = await routine.create({
        name : req.body.routine_name,
        userid : req.body.userid,
        finished_time : 0,
        share : req.body.share,
      })
      
      res.status(201).send({
        "message" : "created"
      });
    }
    /*
    else if( findcard.name === req.body.routine_name ){ //루틴 이름 중복확인
      res.status(409).send({
        "message" : "samename is already exist"
      });
    }*/
    else{
      /*
      for(let i = 0; i<req.body.exercise_array.length; i++){
        const newPart = await routinepart.create({
          userid : req.body.userid,
          routinename : req.body.routine_name,
          exercise_name : req.body.exercise_array[i],
          order : (i+1)
        })
      }*/
      const newRoutine = await routine.create({
        name : req.body.routine_name,
        userid : req.body.userid,
        finished_time : 0,
        share : req.body.share,
      })
      
      res.status(201).send({
        "message" : "created"
      });
    }
  },

  info_Routine: async (req, res) => { //루틴 불러오기 - get 방식
    if( !(req.query.userid)){
      res.status(405).send({
        "message" : "invalid request"
      });
    }
    //루틴 이름이 없는 경우 유저 한 사람의 모든 루틴을 보냄
    else if ( !(req.query.routine_id) ){
      const finduser = await user.findOne({ where : { id : req.query.userid } }); //id수정
      if(finduser){
        const userRoutine = await routine.findAll({ where : { userid : req.query.userid } });
        if(userRoutine.length === 0){ //생성된 루틴이 없는 경우
          res.status(200).send({
            "message" : "please create routine"
          });
        }
        else{
          console.log(userRoutine);
          res.status(200).send({
            "message" : "search success",
            "result" : userRoutine
          });
        }
      }
      else{ //없는 유저일 경우
        res.status(409).send({
          "message" : "cannot find user"
        });
      }
    }
    //루틴 이름이 있는 경우 하나를 클릭한 경우 -> 받은 루틴의 id를 검색하여 보냄.
    else{
      const routineCard = await routine.findOne({
        where : { id : req.query.routine_id}
      });
      const routineparts = await routinepart.findAll({
        where : { routinename : req.query.routine_id}
      });
      if(!routineCard){ //루틴 있는지 검사
        res.status(409).send({
          "message" : "cannot find routine. please check routine name"
        })
      }
      else{
        //let temparray = [];
        let workout = {};
        let columns = {
          "column-1" : {
            id : "column-1",
            title : "저장된 운동",
            taskIds : []
          },
          "column-2": {
            id: "column-2",
            title: "오늘 할 운동",
            taskIds: []
          }
        };
        let temparr = []; //순서
        let temparr2 = [];//값비교용
        const tempex = await exercise.findAll({where : {userid : req.query.userid}});
        for (let i = 0; i<tempex.length; i++){
          columns["column-1"].taskIds.push(String(tempex[i].id));
          workout[String(tempex[i].id)] = { id: String(tempex[i].id), name: tempex[i].name, set_time : tempex[i].set_time, rest_time : tempex[i].rest_time}
        }
        

        for(let i = 0; i<routineparts.length; i++){
          let temp = await exercise.findOne({
            where : { userid : req.query.userid, name : routineparts[i].exercise_name }
          })
          columns["column-2"].taskIds.push(String(temp.id));

          temparr2.push(String(temp.id));
          temparr.push(routineparts[i].order);

          for(let i = 0; i < columns["column-1"].taskIds.length; i++) {
            if(columns["column-1"].taskIds[i] === temp.id)  {
              columns["column-1"].taskIds.splice(i, 1);
              i--;
            }
          }
          //columns["column-1"].taskIds.push(tempex[i].id);
          /*
          temparray.push( {
            name : routineparts[i].exercise_name,
            set_time : temp.set_time,
            rest_time : temp.rest_time,
            memo : temp.memo,
            order : routineparts[i].order,
          });
          */
        }
        for(let i = 0; i<temparr.length; i++){
          columns["column-2"].taskIds[temparr[i]-1] = temparr2[i];
        }

        const responseCard = {
          id : routineCard.id,
          name : routineCard.name,
          userid : routineCard.userid,
          finished_time : routineCard.finished_time,
          share : routineCard.share,
          //exercise_cards : temparray,
          tasks : workout,
          columns : columns,
          columnOrder: ["column-1", "column-2"]
        }
    
        res.status(200).send(responseCard);
      }
    }
  },

  update_Routine: async (req, res) => { //루틴 수정하기 - patch
    if( !(req.body.routine_id)){
      res.status(405).send({
        "message" : "invalid request"
      });
    }
    else{
      //루틴아이디로 찾기
      const routinecard = await routine.findOne({
        where : { id : req.body.routine_id }
      })
      if( routinecard ){
        if( req.body.exercise_array ){
          if( req.body.exercise_array.length !==0 ){
            //기존에 운동 데이터가 있었다면 삭제
            const parts = await routinepart.findAll({
              where : { routinename : req.body.routine_id }
            })
            if(parts){
              for(let i = 0; i<parts.length; i++){
                parts[i].destroy();
              }
            }
            //새로운 운동카드 루틴에 입력
            for(let i = 0; i<req.body.exercise_array.length; i++){
              const newPart = await routinepart.create({
                userid : routinecard.userid,
                routinename : routinecard.id,
                exercise_name : req.body.exercise_array[i],
                order : (i+1)
              })
            }
          }
        }
        
        await routinecard.update({ share : req.body.share, name : req.body.routine_name });
        
        res.status(200).send({
          "message" : "success",
          "result" : routinecard
        });
      }
      else{
        res.status(409).send({
          "message" : "invalid request2"
        });
      }
    }
  },
  delete_Routine: async(req, res) => { //루틴 삭제하기 - delete
    if( !(req.query.routine_id)){
      res.status(405).send({
        "message" : "invalid request1"
      });
    }
    else{
      const card = await routine.findOne({
        where : { id : req.query.routine_id }
      })
      if( card ){
        const parts = await routinepart.findAll({
          where : { routinename : req.query.routine_id }
        })
        for(let i = 0; i<parts.length; i++){
          parts[i].destroy();
        }
        card.destroy();
        res.status(200).send({
          "message" : "delete routine"
        })
      }
      else{
        res.status(409).send({
          "message" : "invalid request2"
        });
      }
    }
  },
  /*
  user_Routine: async(req, res) => { //한 사람의 모든 루틴 가져오기
    if(!(req.query.userid)){
      res.status(405).send({
        "message" : "invalid request1"
      });
    }
    else{
      const finduser = user.findOne({ where : { email : req.query.userid } });
      if(finduser){
        const userRoutine = routine.findAll({ where : { userid : req.query.userid } });
        if(userRoutine.length === 0){ //생성된 루틴이 없는 경우
          res.status(200).send({
            "message" : "please create routine"
          });
        }
        else{
          res.status(200).send({
            "message" : "search success",
            "result" : userRoutine
          });
        }
      }
      else{ //없는 유저일 경우
        res.status(409).send({
          "message" : "cannot find user"
        });
      }
    }
  }*/
};
