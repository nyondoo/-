const express = require('express');
const router = express.Router();
const controller = require('../controller/main');
const login_controller = require('../controller/login');
const passport = require('passport-naver');

router.get('/', controller.main);
router.post('/workInfo', controller.workInfo);
router.post('/workday', controller.workDay);
router.post('/attend', controller.attend);
router.post('/addWorkDays', controller.attend);
router.delete('/deleteWork', controller.deleteWork);

module.exports = router;
