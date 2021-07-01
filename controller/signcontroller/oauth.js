require('dotenv').config();
const clientID = process.env.Naver_CLIENT_ID;
const clientSecret = process.env.Naver_CLIENT_SECRET;
const axios = require('axios');

module.exports = {

Naver : (req,res)=>{
    axios({
        method: 'post',
        url: ``,
        headers: {
          accept: `application/json`
        },
        data: {
          client_id: clientID,
          client_secret: clientSecret,
          code: req.body.authorizationCode
        }
      }).then( (response) => {
        accessToken = response.data.access_token;
        // console.log( "response::" + response.data );
        // console.log( "accessToken:: " + accessToken );
        res.status(200).json({accessToken: accessToken});
      }).catch((e) => {
        res.status(404).send();
      })
    }
}

