process.env.NODE_ENV = 'dev'; // altere para 'production' ou 'dev'

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usuariosRouter = require('./routes/usuarios');
var leiturasRouter = require('./routes/leituras');
var comentariosRouter = require('./routes/comentarios');
var curtidasRouter = require('./routes/curtidas');
var avaliacaoRouter = require('./routes/avaliacoes');
var chamadoRouter = require('./routes/chamados');
var musicaRouter = require('./routes/musicas');

var app = express();

app.use(logger('dev')); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/usuarios', usuariosRouter);
app.use('/leituras', leiturasRouter);
app.use('/comentarios', comentariosRouter);
app.use('/curtidas', curtidasRouter);
app.use('/avaliacoes', avaliacaoRouter);
app.use('/chamados', chamadoRouter);
app.use('/musicas',musicaRouter);

module.exports = app;
