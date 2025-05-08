const express = require('express');
const router = express.Router();
const controller = require('../controllers/produtosController');

router.get('/', controller.getTodos);
router.post('/', controller.criar);

module.exports = router;
