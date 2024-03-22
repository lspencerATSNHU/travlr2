// getting + setting express
var express = require('express');
var router = express.Router();
//controller + main
const ctrlMain = require('../controllers/main');

/* GET home page. */
router.get('/', ctrlMain.index);

module.exports = router;