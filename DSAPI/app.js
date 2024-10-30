const express = require('express');

// Importação das rotas
const cidadeRoutes = require('./routes/cidadeRoutes');
const clienteRoutes = require('./routes/clienteRoutes');
const categoriaRoutes = require('./routes/categoriaRoutes');
const produtoRoutes = require('./routes/produtoRoutes');
const pedidoRoutes = require('./routes/pedidoRoutes');

const app = express();

// Middleware para interpretar JSON
app.use(express.json());

// Definição das rotas
app.use('/api/cidade', cidadeRoutes);
app.use('/api/cliente', clienteRoutes);
app.use('/api/categoria', categoriaRoutes);
app.use('/api/produto', produtoRoutes);
app.use('/api/pedido', pedidoRoutes);

// Inicialização do servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
