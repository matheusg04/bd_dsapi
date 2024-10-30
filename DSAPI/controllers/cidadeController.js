let cidades = [
    { id: 1, nome: "São Paulo", estado: "SP" },
    { id: 2, nome: "Rio de Janeiro", estado: "RJ" },
  ];
  
 
  const listarCidades = (req, res) => {
    res.json(cidades);
  };
  

  const criarCidade = (req, res) => {
    const { nome, estado } = req.body;
    const novaCidade = { id: cidades.length + 1, nome, estado };
    cidades.push(novaCidade);
    res.status(201).json(novaCidade);
  };
  
  module.exports = { listarCidades, criarCidade };
  