const express = require('express');
const plantController = require('../controllers/plantController');

const router = express.Router();

router.get('/', plantController.getData, (req, res) => {
    return res.status(200).send('Successful update');
});

router.get('/getAPlant', plantController.findAPlant, (req, res) => {
    return res.status(200).send('Got a plant');
})

router.get('/getManyPlants', plantController.findPotentialPlants, (req, res) => {
    return status(200).send('Got all plants');
})
module.exports = router;
