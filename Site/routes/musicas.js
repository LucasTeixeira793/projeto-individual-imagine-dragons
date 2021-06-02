var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Musica = require('../models').musicas;


router.get('/', function(req, res, next) {
	console.log('Recuperando Músicas e as médias');

    var instrucaoSql = `SELECT nomeMusica, album, AVG(avaliacao) AS media FROM musica INNER JOIN avaliacao ON fkMusica = idMusica GROUP BY idMusica ORDER BY media DESC`;

	sequelize.query(instrucaoSql, {
		model: Musica,
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
