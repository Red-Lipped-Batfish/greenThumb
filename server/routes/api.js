const express = require('express');
const plantController = require('../controllers/plantController');

const router = express.Router();

router.get('/', plantController.getData, (req, res) => {
  res.send('Routers are working');
});

module.exports = router;
