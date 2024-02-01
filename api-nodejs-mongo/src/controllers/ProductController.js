const express = require('express');
const router = express.Router();
const ProductModel = require('../models/Product');
const moment = require('moment');

// Função para exibir data no fuso horário local
function exibirDataNoFusoHorarioLocal(data) {
  // Certifique-se de que a data está em um formato válido
  const dataValida = moment(data);

  if (!dataValida.isValid()) {
    return 'Data inválida';
  }

  // Exibe a data no fuso horário local
  return dataValida.local().format('DD-MM-YYYY HH:mm:ss');
}

// Rota para buscar um produto por ID
router.get('/buscar/:productId', async (req, res) => {
  const productId = req.params.productId;

  console.log('Product ID:', productId);

  try {
    const product = await ProductModel.findById(productId);

    if (!product) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: true, message: 'Internal Server Error' });
  }
});


// Rota para listar todos os produtos
router.get('/listar', async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: true, message: 'Internal Server Error' });
  }
});

// Rota para cadastrar um novo produto
router.post('/cadastrar', async (req, res) => {
  try {
    const { nome, codigo, descricao, preco } = req.body; // Dados do produto em JSON

    const product = new ProductModel({
      nome,
      codigo,
      descricao,
      preco,
    });

    await product.save();

    return res.json({
      id: product._id,
      data_criacao: exibirDataNoFusoHorarioLocal(product.data_criacao),
      data_atualizacao: exibirDataNoFusoHorarioLocal(product.data_atualizacao),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: true, message: 'Internal Server Error' });
  }
});



// Rota para atualizar um produto existente
router.put('/atualizar/:productId', async (req, res) => {
  const productId = req.params.productId;

  try {
    const product = await ProductModel.findById(productId);

    if (!product) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }

    // Atualizar apenas os campos presentes no corpo da requisição
    Object.assign(product, req.body);

    // Atualizar a data de atualização
    product.data_atualizacao = new Date();

    // Salvar as alterações
    await product.save();

    return res.json({
      message: 'Produto atualizado com sucesso',
      id: product._id,
      data_criacao: exibirDataNoFusoHorarioLocal(product.data_criacao),
      data_atualizacao: exibirDataNoFusoHorarioLocal(product.data_atualizacao),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: true, message: 'Internal Server Error' });
  }
});

// Rota para deletar um produto
router.delete('/deletar/:productId', async (req, res) => {
  const productId = req.params.productId;

  try {
    const result = await ProductModel.deleteOne({ _id: productId });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }

    return res.json({ message: 'Produto deletado com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: true, message: 'Internal Server Error' });
  }
});

// Exportar o router
module.exports = router;

