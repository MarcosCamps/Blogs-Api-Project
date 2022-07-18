const express = require('express');
const userController = require('../controllers/userController');
const tokenValidate = require('../middleware/validateToken');

const router = express.Router();

router.post('/', userController.handleUser);
router.use(tokenValidate);
router.get('/', userController.getUsers);

module.exports = router;
