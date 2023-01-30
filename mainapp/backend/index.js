const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8080;
const router = require('./routes');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.join(__dirname, '.env') });

app.use(cors());
app.use(express.json());

app.use('/', router);

app.listen(PORT, () => {
  console.log(`sever open : ${PORT}`);
});
