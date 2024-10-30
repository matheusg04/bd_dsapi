let produtos = [
    { id: 1, nome: "Televisão", categoria: "Eletrônicos", preco: 1500 },
    { id: 2, nome: "Sofá", categoria: "Móveis", preco: 800 },
  ];
  
  const listarProdutos = (req, res) => {
    res.json(produtos);
  };
  
  const criarProduto = (req, res) => {
    const { nome, categoria, preco } = req.body;
    const novoProduto = { id: produtos.length + 1, nome, categoria, preco };
    produtos.push(novoProduto);
    res.status(201).json(novoProduto);
  };
  
  module.exports = { listarProdutos, criarProduto };
  