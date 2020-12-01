var express = require('express');
var router = express.Router();
var multer  = require('multer');
var path = require('path')

var storage = multer.diskStorage({
  destination: './uploads/',
  filename: function (req, file, cb) {
    cb(null, file.originalname + '-' + Date.now() + path.extname(file.originalname))
  }
});
 
var upload = multer({ //multer settings
  storage: storage,
  onFileUploadStart:  (file) => {
      var ext = path.extname(file.originalname);
      if(ext !== '.pdf') {
          return true;
      }
      return falsed;
  },
  // limits:{
  //     fileSize: 1024 * 1024
  //}
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('indexxx');
});
router.post('/upload', upload.single('avatar'), function(req, res, next) {
  // console.log(req.file);
  // req.file.filename += 'hello';
  // console.log(req.file.filename);
});

module.exports = router;
  