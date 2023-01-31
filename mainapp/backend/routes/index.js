const express = require('express');
const router = express.Router();
const controller = require('../controller/main');

router.get('/', controller.main);

router.post('/workInfo', controller.workInfo);

router.post('/workday', controller.workDay);

module.exports = router;
