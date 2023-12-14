const express = require('express');
const router = express.Router();
const { createText } = require('../controller/textController');

router.route('/').post(createText);

module.exports = router;