var express = require('express');
var router = express.Router();
const { getMe } = require('../controllers/Me.controller');

/* GET the combined resume. */
router.get('/', async (req, res) => {
    await getMe(req, res);
});

module.exports = router;
