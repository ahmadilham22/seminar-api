const express = require('express');
const router = express();
const { signinCms } = require('./controller');

router.post('/auth/sign', signinCms);

module.exports = router;
