const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8080;
const router = require('./routes');
const path = require('path');
const dotenv = require('dotenv');
const session = require('express-session');

var client_id = process.env.REACT_APP_NAVER_CLIENT_ID;
var client_secret = process.env.REACT_APP_NAVER_CLIENT_SECRET;
var state = 'test';
var redirectURI = encodeURI(process.env.REACT_APP_NAVER_CALLBACK_URL);
var api_url = '';

dotenv.config({ path: '../.env' });

app.use(cors());
app.use(express.json());
app.use('/', router);
app.use(session());

//서버를 PORT로 실행
app.listen(PORT, () => {
  console.log(`sever open : ${PORT}`);
});
