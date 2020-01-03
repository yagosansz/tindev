const express = require('express');

const routes = express.Router();

// REST API: GET, POST, PUT, DELETE 
routes.get('/', (req, res) => {
    // req: retorna toda informacao referente a requisicao do usuario (e.g.: parametros na URL).
    // res: retorna resposta ao cliente.

    let name = req.query.name;
    // res.send ira retornar um texto
    return res.json({ message: `Hi ${name}` });
});

routes.post('/devs', (req, res) => {
    return res.json(req.body);
});

module.exports = routes;