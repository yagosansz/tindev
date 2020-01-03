// Eh uma funcao.
// Quando eh chamada cria um novo servidor.
// Funciona como uma porta de entrada onde podemos enviar requisicoes e receber respostas.
const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-twxu2.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Eh necessario informar ao express que as requisicoes vao estar em json
server.use(express.json());
server.use(routes);


// Utilizar somente este comando nao faz a applicacao retornar nada.
// Eh necessario adicionar tratativas de rotas.
server.listen(3333);

