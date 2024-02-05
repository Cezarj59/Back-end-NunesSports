const mongoose = require('../database');

const productSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  codigo: {
    type: String,
    required: true,
    unique: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  preco: {
    type: Number,
    required: true,
  },
  data_criacao: {
    type: Date,
    default: Date.now,
    required: true,
  },
  data_atualizacao: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

// Pré-processamento antes de salvar o documento do produto
productSchema.pre('save', function (next) {
  // Atualiza data_atualizacao apenas se alguns campos específicos forem modificados
  if (this.isModified('nome') || this.isModified('codigo') || this.isModified('descricao') || this.isModified('preco')) {
    this.data_atualizacao = new Date();
  }
  // Chama 'next()' para continuar com o processo de salvamento
  next();
});

// Pós-processamento após encontrar documentos
productSchema.post('find', function (result, next) {
  if (Array.isArray(result)) {
    result.forEach((doc) => {
      // Se quiser ocultar algum campo específico, faça isso aqui
    });
  } else if (result) {
    // Se quiser ocultar algum campo específico, faça isso aqui
  }
  next();
});

// Criar um modelo (classe) usando o esquema
const Product = mongoose.model('Product', productSchema);

// Exportando
module.exports = Product;
