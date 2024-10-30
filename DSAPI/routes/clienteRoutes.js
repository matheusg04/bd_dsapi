const express = require('express');
const { listarClientes, criarCliente } = require('../controllers/clienteController');

const router = express.Router();

router.get('/', listarClientes);       
router.post('/', criarCliente);        

module.exports = router;
