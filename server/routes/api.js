const express = require('express');
const plantController = require('../controllers/plantController');

const router = express.Router();

router.get('/', plantController.getData, (req, res) => {
    return res.status(200).send('Successful update');
});

module.exports = router;
