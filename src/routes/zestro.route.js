const {Router} = require('express');
const {getAllData} = require('../controllers/zestroController.js');
const router = Router();

router.route('/').get(getAllData);

module.exports = {
    router
};