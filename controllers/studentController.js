const { isObjectIdOrHexString } = require('mongoose');
const user = require('../models/user');
const { use } = require('../routes/pageRouter');

//=======================================> home page show

const studentData = async (req, res) => {
  const stu_data = await user.find();
  // console.log(stu_data);
  res.render('index', {
    stu_data,
  });
};

//==============================================> create data
const createStudent = async (req, res) => {
  const { name, age, email, skill, gender, photo } = req.body;

  const postData = {
    name: name,
    age: age,
    email: email,
    skill: skill,
    gender: gender,
    photo: req.file.filename,
  };

  await user.create(postData);
  res.redirect('/');
};
//==============================================>  delete single delete
const deleteSingleStu = async (req, res) => {
  const id = req.params.id;

  const data = await user.deleteOne({ _id: id });
  res.redirect('/');
};

//==========================================> singledata
const singleData = async (req, res) => {
  const id = req.params.id;
  const singdata = await user.findOne({ _id: id });
  res.render('singleStudent', {
    singdata,
  });
  // res.redirect('/');
};
//==========================================>   update student

const updateSutudent = async (req, res) => {
  const id = req.params.id;
  const updatestu = await user.findOne({ _id: id });
  res.render('updatesutdent', {
    updatestu,
  });
};
//=====================================================>  update post mathod
const updateNowSutudent = async (req, res) => {
  const id = req.params.id;
  const { name, age, email, skill, gender, photo } = req.body;
  const updateData = {
    name: name,
    age: age,
    email: email,
    skill: skill,
    photo: req.file.filename,
  };
  await user.updateOne({ _id: id }, updateData);

  res.redirect('/');
};
//=======================================> export controlers
module.exports = {
  studentData,
  deleteSingleStu,
  createStudent,
  singleData,
  updateSutudent,
  updateNowSutudent,
};
