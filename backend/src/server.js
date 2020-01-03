// Eh uma funcao.
// Quando eh chamada cria um novo servidor.
// Funciona como uma porta de entrada onde podemos enviar requisicoes e receber respostas.
const express = require('express');

const server = express();

// REST API: GET, POST, PUT, DELETE 
server.get('/', (req, res) => {
    // req: retorna toda informacao referente a requisicao do usuario (e.g.: parametros na URL).
    // res: retorna resposta ao cliente.

    let name = req.query.name;
    // res.send ira retornar um texto
    return res.json({ message: `Hi ${name}` });
});

// Utilizar somente este comando nao faz a applicacao retornar nada.
// Eh necessario adicionar tratativas de rotas.
server.listen(3333);

