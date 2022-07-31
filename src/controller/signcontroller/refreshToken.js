const jwt = require("jsonwebtoken");
const { users } = require("../../orm/sequelize/models"); //db 내 테이블.

module.exports = async (req, res) => {
  // TODO: urclass의 가이드를 참고하여 GET /refreshtokenrequest 구현에 필요한 로직을 작성하세요.
  // refresh token은 header에 넣을 것.

  let cookie = req.headers.cookie;
  if (!cookie)
    res.status(400).send({ data: null, message: "refresh token not provided" });
  // console.log('cookie: ', cookie) // cookie: refreshToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcklkIjoia2ltY29kaW5nIiwiZW1haWwiOiJraW1jb2RpbmdAY29kZXN0YXRlcy5jb20iLCJjcmVhdGVkQXQiOiIyMDIwLTExLTE4VDEwOjAwOjAwLjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIwLTExLTE4VDEwOjAwOjAwLjAwMFoiLCJpYXQiOjE2MjIxODQzMjh9.C5fYbz31FdRzDr2i3GUzbbi5cliOeGtLcrsE1zrpbj4

  let realCookie = cookie.split("=")[1];

  // console.log('realCookie: ', realCookie)

  let decode;
  await jwt.verify(realCookie, process.env.REFRESH_SECRET, (err, result) => {
    if (err)
      res.status(400).send({
        data: null,
        message: "invalid refresh token, please log in again",
      });
    else decode = result;
  });

  let userInfo = await users.findOne({
    where: { userId: decode.userId, email: decode.email },
  });

  let data = { ...userInfo.dataValues };
  delete data.password; //password만 정보 삭제
  const accessToken = await jwt.sign(data, process.env.ACCESS_SECRET, {
    expiresIn: "1h",
  });
  res.status(200).send({
    data: { userInfo: data, accessToken: accessToken },
    message: "ok",
  }); // 이 부분 확인 필요.

  // console.log('req.headers.authorization', req.headers.authorization)

  // if(userInfo) await res.status(200).send({ data: null, message: "refresh token not provided"})
};
