var express = require('express');
var router = express.Router();
const { getProjects, createProject } = require('../controllers/Project.controller');

/* GET users listing. */
router.get('/', async (req, res) =>  {
    await getProjects(req, res);
});

router.post('/', async (req, res) => {
    await createProject(req, res);
});

module.exports = router;