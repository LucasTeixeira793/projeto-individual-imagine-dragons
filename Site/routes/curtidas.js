var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Curtida = require('../models').Curtida;

/* ROTA QUE RECUPERA CRIA UMA PUBLICAÇÃO */
router.post('/curtir', function(req, res, next) {
    console.log("Iniciando Publicação...")
    
    // let idComentario = req.params.idComentario;
	let idUser = 3;

    console.log(idComentario);

    var instrucaoSql = `INSERT 
    INTO curtida
    values (
        ${idUser},
        ${idComentario}
    )`;

    sequelize.query(instrucaoSql, {
		model: Curtida,
		mapToModel: true 
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
