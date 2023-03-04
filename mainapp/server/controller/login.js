const { User } = require('../model');
const dotenv = require('dotenv');
var client_id = process.env.REACT_APP_NAVER_CLIENT_ID;
var client_secret = process.env.REACT_APP_NAVER_CLIENT_SECRET;
var state = 'test';
var redirectURI = encodeURI(process.env.REACT_APP_NAVER_CALLBACK_URL);
var api_url = '';

exports.login = (req, res) => {
  api_url =
    'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=' +
    req.query.client_id +
    '&redirect_uri=' +
    redirectURI +
    '&state=' +
    state;
  res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
  res.end(
    "<a href='" +
      api_url +
      "'><img height='50' src='http://static.nid.naver.com/oauth/small_g_in.PNG'/></a>"
  );
};

exports.callback = (req, res) => {
  code = req.query.code;
  state = req.query.state;
  api_url =
    'https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=' +
    client_id +
    '&client_secret=' +
    client_secret +
    '&redirect_uri=' +
    redirectURI +
    '&code=' +
    code +
    '&state=' +
    state;
  var request = require('request');
  var options = {
    url: api_url,
    headers: {
      'X-Naver-Client-Id': client_id,
      'X-Naver-Client-Secret': client_secret,
    },
  };
  request.get(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.writeHead(200, { 'Content-Type': 'text/json;charset=utf-8' });
      res.end(body);
    } else {
      res.status(response.statusCode).end();
      console.log('error = ' + response.statusCode);
    }
  });
};

exports.main = async (req, res) => {
  const { token } = req.body; // client에서 전달받은 token
  const userData = await axios.get('https://openapi.naver.com/v1/nid/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(userData);
  // let inquiry = User.findOne({
  //   where: {
  //     id: userData.
  //   }
  // })
};
