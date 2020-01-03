const express = require('express');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');

const routes = express.Router();

// REST API: GET, POST, PUT, DELETE 
routes.get('/', (req, res) => {
    // req: retorna toda informacao referente a requisicao do usuario (e.g.: parametros na URL).
    // res: retorna resposta ao cliente.

    let name = req.query.name;
    // res.send ira retornar um texto
    return res.json({ message: `Hi ${name}` });
});

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);

module.exports = routes;