var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Avaliacao = require('../models').avaliacoes;

/* ROTA QUE RECUPERA CRIA UMA AVALIACAO */
router.get('/cadastrar/:idMusicaCad/:idUserCad/:numAvaliacao', function(req, res, next) {
    console.log("\nIniciando Avaliacao...")
    
    let idMusica = req.params.idMusicaCad;
    console.log(idMusica);
	let idUser = req.params.idUserCad;
    console.log(idUser);
    let avaliacao = req.params.numAvaliacao;
    console.log(avaliacao);

    var instrucaoSql = `INSERT INTO avaliacao (idAvaliacao, fkUser, fkMusica, avaliacao) VALUE 
    (null, ${idUser}, ${idMusica}, ${avaliacao})`;

    sequelize.query(instrucaoSql, {
		model: Avaliacao,
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

router.get('/:idMusica', function(req, res, next) {
	console.log('Verificando curtidas na música');
	let idMusica = req.params.idMusica;

    var instrucaoSql = `SELECT AVG(avaliacao) AS media FROM avaliacao WHERE fkMusica = ${idMusica}`;

	sequelize.query(instrucaoSql, {
		model: Avaliacao,
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
