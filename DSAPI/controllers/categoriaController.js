let categorias = [
    { id: 1, nome: "Eletrônicos" },
    { id: 2, nome: "Móveis" },
  ];
  
  const listarCategorias = (req, res) => {
    res.json(categorias);
  };
  
  const criarCategoria = (req, res) => {
    const { nome } = req.body;
    const novaCategoria = { id: categorias.length + 1, nome };
    categorias.push(novaCategoria);
    res.status(201).json(novaCategoria);
  };
  
  module.exports = { listarCategorias, criarCategoria };
  