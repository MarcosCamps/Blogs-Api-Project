const express = require('express');
const categoriesController = require('../controllers/categoriesController');
const tokenValidate = require('../middleware/validateToken');

const router = express.Router();

router.use(tokenValidate);
router.post('/', categoriesController.addCategory);

module.exports = router;
