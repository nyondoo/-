const { Work } = require('../model');

exports.main = async (req, res) => {
  let result = await Work.findAll();
  console.log('등록된 근무지 정보 조회 : ', result);
  res.send(JSON.stringify(result));
};

exports.workInfo = async (req, res) => {
  console.log('입력 요청 : ', req.body);
  let input = await Work.create({
    id: req.body.id,
    name: req.body.name,
    wage: req.body.wage,
    payday: req.body.payday,
    worktime: req.body.worktime,
    pay: req.body.pay,
    benefit: req.body.benefit,
    tax: req.body.tax,
  });
  res.send(true);
};
