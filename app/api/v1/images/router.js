const express = require('express');
const router = express();
const uploadMiddleware = require('../../../middlewares/multer');
const { create } = require('./controller');

router.post('/images', uploadMiddleware.single('avatar'), create);

module.exports = router;
