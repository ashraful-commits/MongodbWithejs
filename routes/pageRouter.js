const express = require('express');

//============================================> import controller
const {
  studentData,
  deleteSingleStu,
  createStudent,
  singleData,
  updateSutudent,
  updateNowSutudent,
} = require('../controllers/studentController');
const multerPhoto = require('../middlewares/mlter');

//========================================> crate router

const router = express.Router();
//=======================================> use router
router.get('/', studentData);
router.post('/', multerPhoto, createStudent);
router.get('/view/:id', singleData);
router.get('/update/:id', updateSutudent);
router.post('/update/:id', multerPhoto, updateNowSutudent);
router.get('/delete/:id', deleteSingleStu);

// ======================================> exporet router

module.exports = router;
