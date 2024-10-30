let pedidos = [
    { id: 1, cliente: "João Silva", produto: "Televisão", quantidade: 1 },
    { id: 2, cliente: "Maria Souza", produto: "Sofá", quantidade: 2 },
  ];
  
  const listarPedidos = (req, res) => {
    res.json(pedidos);
  };
  
  const criarPedido = (req, res) => {
    const { cliente, produto, quantidade } = req.body;
    const novoPedido = { id: pedidos.length + 1, cliente, produto, quantidade };
    pedidos.push(novoPedido);
    res.status(201).json(novoPedido);
  };
  
  module.exports = { listarPedidos, criarPedido };
  