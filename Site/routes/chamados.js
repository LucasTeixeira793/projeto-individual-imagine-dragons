var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Chamado = require('../models').Chamado;

/* ROTA QUE CRIA UM CHAMADO */
router.post('/publicar/:idUser', function(req, res, next) {
    console.log("\nIniciando Chamado...")
    
	let idUser = req.params.idUser;
    console.log(idUser);
    let assunto = req.body.assunto;
    let mensagem = req.body.mensagem;

    var instrucaoSql = `INSERT INTO chamado VALUE 
    (null, '${assunto}', '${mensagem}', ${idUser})`;

    sequelize.query(instrucaoSql, {
		model: Chamado,
		mapToModel: true 
	}).then(resultado => {
        console.log("Chamado realizado com sucesso!!");
        res.send(resultado);
    }).catch(erro => {
        console.log('DEU UM ERRINHO');
        console.error(erro);
        res.status(500).send(erro.message);
    })
})

module.exports = router;
