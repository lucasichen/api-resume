var express = require('express');
var router = express.Router();
const { getContacts, updateContacts } = require('../controllers/Contact.controller');

/* GET users listing. */
router.get('/', async (req, res) =>  {
    await getContacts(req, res);
});

router.put('/', async (req, res) => {
    await updateContacts(req, res);
});


module.exports = router;