require('dotenv').config();
const env = process.env;

const development = {
  host: 'localhost',
  database: env.REACT_APP_MYSQL_DATABASE,
  username: env.REACT_APP_MYSQL_USERNAME,
  password: env.REACT_APP_MYSQL_PASSWORD,
  dialect: 'mysql',
};

module.exports = { development };
