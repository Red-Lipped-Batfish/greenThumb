const express = require('express');
const plantController = require('../controllers/plantController')
const router = express.Router();
const fetch = require('node-fetch');

router.get('/', plantController.getData, (req, res, next) => {
    res.send('Routers are working')
})


module.exports = router;