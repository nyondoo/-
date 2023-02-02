const express = require('express');
const router = express.Router();
const controller = require('../controller/main');

router.get('/', controller.main);

router.post('/workInfo', controller.workInfo);

router.post('/workday', controller.workDay);

router.post('/attend', controller.attend);

router.post('/addWorkDays', controller.attend);

module.exports = router;
