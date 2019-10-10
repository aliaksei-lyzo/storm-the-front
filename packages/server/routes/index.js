const express = require('express');
const news = require('./news');

const router = express.Router();

router.use('/news', news);

module.exports = router;
