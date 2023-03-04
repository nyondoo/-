const { Work } = require('../model');

exports.main = async (req, res) => {
  let result = await Work.findAll();
  console.log('근무지 정보 조회 완료');
  res.send(JSON.stringify(result));
};

exports.workInfo = async (req, res) => {
  console.log('입력 요청 완료');
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
  console.log('근무한 날');
  res.send(true);
};

exports.attend = async (req, res) => {
  const newWorkDay = req.body.workdays;
  let workDays = await Work.findAll({
    where: {
      name: req.body.name,
    },
  });
  let workDayArr = JSON.parse(workDays[0].workdays);
  let addWorkDayArr = [...new Set([...workDayArr, newWorkDay])];
  let newWage = workDays[0].worktime * workDays[0].pay * addWorkDayArr.length;
  let result = await Work.update(
    {
      workdays: JSON.stringify(addWorkDayArr),
      wage: newWage,
    },
    {
      where: {
        name: req.body.name,
      },
    }
  );
  if (workDayArr.length === addWorkDayArr.length) {
    res.send({ msg: false });
  } else {
    res.send({ msg: true, wage: newWage });
  }
};

exports.deleteWork = async (req, res) => {
  let delResult = await Work.destroy({
    where: {
      id: req.body.id,
    },
  });
};
