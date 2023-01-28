const express = require("express");
const cors = require('cors');
const app = express();
const PORT = 8080;

app.use(cors());

app.get('/', (req, res) => {
    const mainBlock = [
        {
            name: '근무지1',
            wage: 0
        }
    ];
    res.send(JSON.stringify(mainBlock));
});

app.listen(PORT, () => {
    console.log(`sever open : ${PORT}`);
});