var express = require('express');
var router = express.Router();
const { getRoutes, createRoute } = require('../controllers/Route.controller');

/* GET users listing. */
router.get('/', async (req, res) =>  {
    await getRoutes(req, res);
});

router.post('/', async (req, res) => {
    await createRoute(req, res);
});

module.exports = router;