create database imagineDragons;
use imagineDragons;

create table Usuario(
	idUser int primary key auto_increment,
    nomeUser varchar(70),
    nickname varchar(20),
    email varchar(50),
    senha varchar(80)
);

create table Musica(
	idMusica int primary key auto_increment,
    nomeMusica varchar(50),
    album varchar(50)
);

create table Avaliacao(
	fkMusica int,
    foreign key (fkMusica) references Musica(idMusica),
    fkUser int,
    foreign key (fkUser) references Usuario(idUser),
    avaliacao int,
    primary key(fkMusica,fkUser)
);

create table Comentario(
	idComentario int primary key auto_increment,
    dataComentario date,
    comentario varchar(200),
    fkUser int,
    foreign key (fkUser) references usuario(idUser),
    fkMusica int,
    foreign key (fkMusica) references musica(idMusica)
);

create table Curtida(
	fkUser int,
    foreign key (fkUser) references usuario(idUser),
    fkComentario int,
    foreign key (fkComentario) references Comentario(idComentario)
);

create table Noticia(
	idNoticia int primary key auto_increment,
    tituloNoticia varchar(50),
    textoNoticia text not null,
    dataNoticia DATE
);