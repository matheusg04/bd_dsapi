const express = require('express');
const { listarProdutos, criarProduto } = require('../controllers/produtoController');

const router = express.Router();

router.get('/', listarProdutos);       
router.post('/', criarProduto);        

module.exports = router;
