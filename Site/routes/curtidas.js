var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Curtida = require('../models').Curtida;

/* ROTA QUE RECUPERA CRIA UMA PUBLICAÇÃO */
router.post('/:idComentario', function(req, res, next) {
    console.log("Iniciando Publicação...")
    
    let idComentario = req.params.idComentario;
	let idUser = 3;

    Curtida.create({
        fkUser: idUser,
		fkComentario: idComentario
    }).then(resultado => {
        console.log("Curtida realizada com sucesso!!");
        res.send(resultado);
    }).catch(erro => {
        console.log('DEU UM ERRINHO');
        console.error(erro);
        res.status(500).send(erro.message);
    })
})

module.exports = router;
