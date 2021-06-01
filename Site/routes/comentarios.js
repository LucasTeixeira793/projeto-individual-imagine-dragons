var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Comentario = require('../models').comentarios;

// /* ROTA QUE RECUPERA CRIA UMA PUBLICAÇÃO */
router.post('/publicar/:idUser/:idMusica', function(req, res, next) {
    console.log("Iniciando Publicação...")
    
	let idUser = req.params.idUser;
    let idMusica = req.params.idMusica;
    let comentario = req.body.inputComentario;
    
    let instrucaoSql = `INSERT 
    INTO comentario 
    VALUES
	(null, 
        '${comentario}',
        ${idUser},
        ${idMusica}
    )`;

    sequelize.query(instrucaoSql, {
		model: Comentario,
		mapToModel: true 
	})
    .then(resultado => {
        console.log("Post realizado com sucesso!!");
        res.send(resultado);
    }).catch(erro => {
        console.log('DEU UM ERRINHO');
        console.error(erro);
        res.status(500).send(erro.message);
    })
})

/* ROTA QUE RECUPERA TODAS AS PUBLICAÇÕES */
router.get('/:musicota', function(req, res, next) {
	console.log('Recuperando todas as publicações');
	let musica = req.params.musicota;
    let instrucaoSql = `SELECT 
    idComentario, 
    nickname, 
    comentario, 
    COUNT(curtida.fkComentario) AS 'curtidas' 
    FROM usuario 
    INNER JOIN comentario 
    ON fkUser = idUser 
    LEFT JOIN curtida 
    ON fkComentario = idComentario 
    WHERE fkMusica = ${musica} 
    GROUP BY idComentario 
    ORDER BY idComentario DESC`;

	sequelize.query(instrucaoSql, {
		model: Comentario,
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
