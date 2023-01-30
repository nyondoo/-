import { useSelector } from 'react-redux';

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8080;

const list = useSelector((state) => state.checkwork.list);

app.use(cors());

app.get('/', (req, res) => {
  //   const mainBlock = [
  //     {
  //       name: '근무지1',
  //       wage: 0,
  //     },
  //   ];
  res.send(JSON.stringify(list));
});

app.listen(PORT, () => {
  console.log(`sever open : ${PORT}`);
});
