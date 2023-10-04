var express = require('express');
var router = express.Router();
const { getEducations, createEducation } = require('../controllers/Education.controller');

/* GET users listing. */
router.get('/', async (req, res) =>  {
    await getEducations(req, res);
});

router.post('/', async (req, res) => {
    await createEducation(req, res);
});

module.exports = router;