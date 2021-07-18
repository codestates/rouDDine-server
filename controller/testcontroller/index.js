const { exercise } = require("../../models")
const { routine } = require("../../models")
const { user } = require("../../models")
const jwt = require('jsonwebtoken');
const { Op } = require("sequelize");

module.exports = {
  //운동카드 생성 - post 방식
  create_exercise: async (req, res) => {
    if(!req.cookies.accessToken || req.cookies.accessToken === ''){
      res.status(409).send({
        "message" : "invalid request"
      })
    }
    else{
      const token = req.cookies.accessToken
      const data = jwt.verify(token, process.env.ACCESS_SECRET);
      let tempname = '새 운동'
      if(req.body.name){
        tempname = req.body.name;
      }
      const routineinfo = routine.findOne({where : {id : req.body.routine_id}})
      if(routineinfo){
        if(routineinfo.default === true){
          res.status(202).send({
            "message" : "기본루틴입니다."
          })
        }
        else{
          const newCard = await exercise.create({
            userid: data.id,
            routine_id : req.body.routine_id,
            name : tempname,
            set_number: 0,
            set_time: 0,
            rest_time: 0,
            memo : '',
            default : false,
            workoutimage : req.body.workoutimage
          });
          res.status(201).send(newCard);
        }
      }
      else{
        res.status(409).send({
          "message" : "없는 루틴입니다.(잘못된 루틴아이디)"
        })
      }
    }
  },
  //운동카드 삭제 - delete 방식
  delete_exercise: async (req, res) => {
    if(!req.query.workoutid){
      res.status(409).send({
        "message" : "invalid request"
      })
    }
    else{
      const card = await exercise.findOne({ //워크아웃 찾기
        where : { id : req.query.workoutid }
      })
      if(card){
        const routineinfo = routine.findOne({where : {id : card.routine_id}})
        if(routineinfo){
          if(routineinfo.default === true){
            res.status(202).send({
              "message" : "기본루틴입니다."
            })
          }
          else{
            const remainexercises = await exercise.findAll({ where : { routine_id : card.routine_id } });
            card.destroy();//운동카드 삭제
            res.status(200).send({
              "message" : "delete card",
              result : remainexercises
            })
          }
        }
      }
      else{
        res.status(409).send({
          "message" : "not found card"
        })
      }
    }
  },
  //운동카드 불러오기 - get방식 - 쿼리로 루틴아이디 - 루틴에 생성한 워크아웃
  info_exercise: async (req, res) => {
      if(!req.query.routine_id){ //루틴 아이디 없이 요청
        let every_card = await exercise.findAll({
          where : {
              default : true
          }
        })
        res.status(200).send({
          "message" : "default exercises",
          "result" : every_card
        })
      }
      else{//루틴 아이디로 요청
        let every_card = await exercise.findAll({
          where : { routine_id : req.query.routine_id }
        })
        if(every_card.length !== 0){
          res.status(200).send({
            "message" : "request success",
            "result" : every_card
          })
        }
        else{
          res.status(409).send({
            "message" : "no result. create card"
        })
        }
      }
    
  },
  //운동카드 수정하기 - patch방식
  update_exercise: async (req, res) => {
    if(!req.body.workoutid){
      res.status(409).send({
        "message" : "invalid request"
      })
    }
    else{
      const ex_card = await exercise.findOne({
        where : { id : req.body.workoutid }
      })
      
      if(ex_card){
        const routineinfo = routine.findOne({where : {id : ex_card.routine_id}})
        if(routineinfo.default === true){
          res.status(202).send({
            "message" : "기본루틴입니다."
          })
        }
        else{
          await ex_card.update({
            name : req.body.name,
            set_time : req.body.set_time,
            set_number: req.body.set_number,
            rest_time : req.body.rest_time,
            memo : req.body.memo,
            order: req.body.order
          });
          res.status(200).send({
            "message" : "update exersice card",
            "result" : ex_card
          })
        }
      }
      else{
        res.status(409).send({
          "message" : "update fail"
        })
      }
    }    
  },

  create_Routine: async (req, res) => {
    if( !(req.cookies.accessToken || req.cookies.accessToken === '') ){
      res.status(405).send({
        "message" : "invalid request"
      });
    }
    else{
      const token = req.cookies.accessToken
      const data = jwt.verify(token, process.env.ACCESS_SECRET);
      const userinfo = user.findOne( { where : { id : data.id } } )
      if(!userinfo){ //토큰으로 유저 못찾으면 생성불가
        res.status(405).send({
          "message" : "invalid request"
        });
      }
      else{
        const newRoutine = await routine.create({
          name : '새 루틴',
          userid : data.id,
          finished_time : 0,
          share : 'false',
          default : 'false',
          finished_total_time :0,
          routineimage: 'defaultroutine'
        })
        
        res.status(201).send({
          "message" : "created"
        });
      }
    }
  },

  info_Routine: async (req, res) => { //루틴 불러오기 - get 방식
    if ( !(req.query.routine_id) ){ //루틴 전체 불러오기
      let finduser = null;
      let data;
      console.log('루틴전체 불러오기')
      
      if(req.cookies.accessToken){ //토큰 있는지 검사
        console.log("토큰검사")
        const token = req.cookies.accessToken
        data = jwt.verify(token, process.env.ACCESS_SECRET);
        finduser = await user.findOne({ where : { id : data.id } });
      } //검사완료 - 있으면 유저 찾아둠

      let routineCard= [];
      if(finduser){ //로그인 한 경우
        console.log("로그인성공")
        
        routineCard = await routine.findAll({ //로그인 한 경우 자기 루틴과 기본루틴 검색
          where : {
            [Op.or] : [
              {userid : data.id},
              {default : true}
            ]
          }});
        }
        else{ //로그인 안한경우 기본 루틴만 검색
          console.log('로그인 안함')
          routineCard = await routine.findAll({
            where : {
                default : true
            }});
        }
          
        if(routineCard.length === 0){ //생성된 루틴이 없는 경우
          res.status(200).send({
            "message" : "please create routine"
          });
        }
        else{//루틴 찾은 경우
          let initialData = [];
          for(let i = 0; i<routineCard.length;  i++){
            const routineparts = await exercise.findAll({ //루틴아이디가 리치하는 운동찾기
              where : { routine_id : routineCard[i].id}
            });
            let routineData = {};
            routineData.id = routineCard[i].id;
            routineData.name = routineCard[i].name;
            routineData.userid = routineCard[i].userid;
            routineData.finished_time = routineCard[i].finished_time;
            routineData.share = routineCard[i].share;
            routineData.routineimage = routineCard[i].routineimage;
            routineData.default = routineCard[i].default;
            routineData.tasks = [];

            
            for(let j = 0; j<routineparts.length; j++){ //정렬된 순서대로 운동 정보 tasks 에 저장
              let temp = {
                id : String(routineparts[j].id),
                name : routineparts[j].name,
                set_number : routineparts[j].set_number,
                set_time : routineparts[j].set_time,
                rest_time : routineparts[j].rest_time,
                memo : routineparts[j].memo,
                order : routineparts[j].order
              };
              routineData.tasks.push(temp);
            }
            initialData.push(routineData);
          }
          res.status(200).send(initialData);
        }

    }
    //루틴 이름이 있는 경우 하나를 클릭한 경우 -> 받은 루틴의 id를 검색하여 보냄.
    else{
      const routineCard = await routine.findOne({
        where : { id : req.query.routine_id }
      });
      const routineparts = await exercise.findAll({
        where : { routine_id : req.query.routine_id }
      });
      if(!routineCard){ //루틴 있는지 검사
        res.status(409).send({
          "message" : "cannot find routine. please check routine id"
        })
      }
      else{
        let workout = [];
        for(let i = 0; i<routineparts.length; i++){
          workout.push(routineparts[i])
        }
        workout.sort(function(a, b){
          return a.order - b.order
        })
        const responseCard = {
          id : routineCard.id,
          name : routineCard.name,
          userid : routineCard.userid,
          finished_time : routineCard.finished_time,
          total_time : routineCard.total_time,
          share : routineCard.share,
          tasks : workout,
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
      //루틴아이디로 생성된 루틴 찾기
      const routinecard = await routine.findOne({
        where : { id : req.body.routine_id }
      })
      if( routinecard ){
        if(routinecard.default === true){
          res.status(202).send({
            "message" : "기본루틴입니다."
          });
        }
        else{
          let time = 0;
          if( req.body.exercise_array ){
            if( req.body.exercise_array.length !==0 ){ //운동수정하는경우            
              for(let i = 0; i<req.body.exercise_array.length; i++){
                let ex = await exercise.findOne( { where : { id : req.body.exercise_array[i].id } } )
                if(ex.set_time&&ex.set_number){
                  time += (ex.set_time * ex.set_number) //운동 총 시간 계산
                }
                await ex.update({order : i+1})
              }
            }
          }
          
          await routinecard.update({ share : req.body.share, name : req.body.routine_name, total_time : time});
          const excards = await exercise.findAll( { where : { routine_id : routinecard.id } } );
          
          res.status(200).send({
            "message" : "success",
            "result" : routinecard,
            "exercises" : excards
          });
        }
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

        if(card.default === true){
          res.status(202).send({
            "message" : "기본루틴입니다."
          });
        }
        else{
          const parts = await exercise.findAll({ //루틴안의 운동들 삭제
            where : { routine_id : req.query.routine_id }
          })
          for(let i = 0; i<parts.length; i++){
            parts[i].destroy();
          }
          card.destroy();
          res.status(200).send({
            "message" : "delete routine"
          })
        }
      }
      else{
        res.status(409).send({
          "message" : "invalid request2"
        });
      }
    }
  },
}