var express = require('express');
var router = express.Router();
const { getExperiences, createExperience } = require('../controllers/Experience.controller');

/* GET users listing. */
router.get('/', async (req, res) =>  {
    await getExperiences(req, res);
});

router.post('/', async (req, res) => {
    await createExperience(req, res);
});

module.exports = router;