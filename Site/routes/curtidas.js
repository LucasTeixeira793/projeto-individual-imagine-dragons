var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Curtida = require('../models').Curtida;

/* ROTA QUE RECUPERA CRIA UMA CURTIDA */
router.get('/curtir/:idUser/:idComentario', function(req, res, next) {
    console.log("Iniciando Curtida...")
    
    let idComentario = req.params.idComentario;
    console.log(idComentario);
	let idUser = req.params.idUser;
    console.log(idUser);

    var instrucaoSql = `INSERT INTO curtida VALUE (${idUser}, ${idComentario})`;

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

router.get('/:idUser/:idComentario', function(req, res, next) {
	console.log('Verificando se o usuario ja curtiu esse comentario');
	let idUser = req.params.idUser;
    let idComentario = req.params.idComentario;

    var instrucaoSql = `SELECT 
    COUNT(*) as curtido FROM
    Curtida WHERE 
    fkUser = ${idUser} AND 
    fkComentario = ${idComentario}`;

	sequelize.query(instrucaoSql, {
		model: Curtida,
		mapToModel: true 
	})
	.then(resultado => {
		console.log(`Encontrados: ${resultado.length}`);
		res.json(resultado);
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
	});
});

module.exports = router;
