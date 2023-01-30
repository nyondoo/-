const { Work } = require('../model');

exports.main = async (req, res) => {
  let result = await Work.findAll();
  console.log('back-res : ', result);
  res.send(JSON.stringify(result));
};
