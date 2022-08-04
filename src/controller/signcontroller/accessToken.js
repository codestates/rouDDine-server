const { users } = require("../../orm/sequelize/models");
const jwt = require("jsonwebtoken"); // 명심!

module.exports = async (req, res) => {
  // TODO: urclass의 가이드를 참고하여 GET /accesstokenrequest 구현에 필요한 로직을 작성하세요.
  // console.log('req: ', req.headers.authorization)

  // 1. req에 담겨져 있는 토큰 확인.
  // 2. 유효여부 확인 (decode?, 서버 key 대조)

  let token = req.headers.authorization; //

  if (!token) {
    res.status(400).send({ data: null, message: "invalid access token" }); // token이 없는 경우
  }

  let realToken = token.split(" ")[1];
  let decode = await jwt.verify(realToken, process.env.ACCESS_SECRET); // 토큰 유효성 확인, 외부로부터 데이터를 가져올 때 비동기처리
  let userInfo = await users.findOne({
    where: { userId: decode.userId, email: decode.email },
  }); // db에서 원하는 데이터 서치 후 반환.

  if (!userInfo) {
    res.status(400).send({ data: null, message: "not authorized" });
  } else {
    let data = { ...userInfo.dataValues };
    delete data.password; //password만 정보 삭제
    console.log("data :", data);
    res.status(200).send({ data: { userInfo: data }, message: "ok" }); // 이 부분 확인 필요.
  }
};