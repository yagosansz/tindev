const { Schema, model } = require('mongoose');

// Qual a minha estrutura da tabela do banco de dados para armazenar um desenvolvedor?
const DevSchema = new Schema({
  name: {
      type: String,
      required: true
  },
  user: {
      type: String,
      required: true
  },
  bio: String,
  avatar: {
      type: String,
      required: true
  }  
}, {
    timestamps: true,
});

// timestamps: true
// Ira adicionar duas colunas, preenchidas automaticamente pelo mongoose: createdAt, updatedAt

module.exports = model('Dev', DevSchema);