const router = require('express').Router();

router.use('/teacher', require('./teacher_controller'));

module.exports = router;
