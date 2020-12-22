const namecontroller = require('../controllers/namecontroller');

const express = require('express');
const router = express.Router();

const cors = require('cors');

router.use(cors());

router.get('/',namecontroller.find_all_names);

module.exports = router;
