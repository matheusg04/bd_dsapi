let clientes = [
    { id: 1, nome: "João Silva", email: "joao@gmail.com" },
    { id: 2, nome: "Maria Souza", email: "maria@gmail.com" },
  ];
  
  const listarClientes = (req, res) => {
    res.json(clientes);
  };
  
  const criarCliente = (req, res) => {
    const { nome, email } = req.body;
    const novoCliente = { id: clientes.length + 1, nome, email };
    clientes.push(novoCliente);
    res.status(201).json(novoCliente);
  };
  
  module.exports = { listarClientes, criarCliente };
  