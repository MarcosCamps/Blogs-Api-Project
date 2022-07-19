const express = require('express');
const tokenValidate = require('../middleware/validateToken');
const postController = require('../controllers/postController');

const router = express.Router();

router.use(tokenValidate);
router.post('/', postController.createPosts);

module.exports = router;
