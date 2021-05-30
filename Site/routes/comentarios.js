var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Comentario = require('../models').Comentario;

/* ROTA QUE RECUPERA CRIA UMA PUBLICAÇÃO */
router.post('/', function(req, res, next) {
    console.log("Iniciando Publicação...")
    
	let idUser = sessionStorage.getItem('id');

    Comentario.create({
        comentario: req.body.inputComentario,
        fkUsuer: idUser,
		fkMusica : 1
    }).then(resultado => {
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
    // let instrucaoSql = `SELECT 
    // usuario.nickname,
    // idComentario,
    // comentario
    // FROM usuario
    // INNER JOIN comentario
    // ON idUser = fkUser
    // INNER JOIN Curtida
    // ON 
    // WHERE fkMusica = ${musica}
    // ORDER BY idComentario DESC`;

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


/* ROTA QUE RECUPERA AS PUBLICAÇÕES DE UM USUÁRIO PELO ID */
// router.get('/:idUsuario', function(req, res, next) {
    
//     var idUsuario = req.params.idUsuario;
// 	console.log('Recuperando todas as publicações id: ' + idUsuario);

//     let instrucaoSql = `SELECT 
//     nickname,
//     comentario
//     FROM usuario
//     INNER JOIN comentario
//     ON fkUser = idUser
//     WHERE fkMusica = ${idUsuario}
//     ORDER BY idComentario DESC`;

// 	sequelize.query(instrucaoSql, {
// 		model: Comentario,
// 		mapToModel: true 
// 	})
// 	.then(resultado => {
// 		console.log(`Encontrados: ${resultado.length}`);
// 		res.json(resultado);
// 	}).catch(erro => {
// 		console.error(erro);
// 		res.status(500).send(erro.message);
// 	});
// });

module.exports = router;
