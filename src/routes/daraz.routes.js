const {Router} = require('express');
const {getAllData} = require('../controllers/darazController');
const router = Router();

router.route('/').get(getAllData);

module.exports = {
    router
};