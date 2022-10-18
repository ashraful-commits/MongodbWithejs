const multer = require('multer');
const path = require('path');
const fs = require('fs');

//==========================================>  create storage

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../public/images'));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const multerPhoto = multer({
  storage,
}).single('photo');

module.exports = multerPhoto;
