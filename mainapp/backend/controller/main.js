const { Work } = require('../model');

exports.main = async (req, res) => {
  let result = await Work.findAll();
  console.log('근무지 정보 조회');
  res.send(JSON.stringify(result));
};

exports.workInfo = async (req, res) => {
  console.log('입력 요청 : ', req.body);
  let input = await Work.create({
    id: req.body.id,
    name: req.body.name,
    workdays: JSON.stringify(req.body.workdays),
    payday: req.body.payday,
    worktime: req.body.worktime,
    pay: req.body.pay,
    benefit: req.body.benefit,
    tax: req.body.tax,
    wage: req.body.worktime * req.body.pay * req.body.workdays.length,
  });
  res.send(true);
};

exports.workDay = (req, res) => {
  console.log('근무한 날 : ', req.body.workedDays);
  res.send(true);
};
