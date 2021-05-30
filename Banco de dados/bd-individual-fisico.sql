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
    dataAvaliacao timestamp default current_timestamp,
    avaliacao int,
    primary key(fkMusica,fkUser,dataAvaliacao)
);

create table Comentario(
	idComentario int primary key auto_increment,
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
    foreign key (fkComentario) references Comentario(idComentario),
    -- dataCurtida timestamp default current_timestamp,
    primary key(fkUser,fkComentario)
);
-- drop table curtida;
insert into curtida value(1,2);
select * from curtida;

select * from usuario;
select * from musica;
select * from comentario;

insert into comentario values
	(null, 'Essa música é perfeita :)', 1, 1);
insert into comentario values
	(null, 'A letra dessa música machuca muito, mas mesmo assim é incrivel',1, 4);
insert into comentario values
	(null, 'Teste coment',1, 3);
insert into comentario values
	(null, 'Teste coment2',1, 3);
insert into comentario values
	(null, 'Teste coment3',2, 3);
    
    
insert into musica values
	(null,'Radioactive','Night Visions'),
    (null,'Demons','Night Visions'),
    (null,"It's time",'Night Visions'),
    (null,'Bleeding out','Night Visions'),
    (null,'On the top of the world','Night Visions'),
    
    (null,'Shots','Smoke and Mirrors'),
    (null,'I bet my life','Smoke and Mirrors'),
    (null,'Gold','Smoke and Mirrors'),
    (null,'Smoke and Mirrors','Smoke and Mirrors'),
    (null,'Friction','Smoke and Mirrors'),
    
    (null,'Believer','Evolve'),
    (null,'Whatever it takes','Evolve'),
    (null,'Walking the wire','Evolve'),
    (null,'Mouth of the river','Evolve'),
    (null,'Thunder','Evolve'),
    
    (null,'Natural','Origins'),
    (null,'Birds','Origins'),
    (null,'Bad Liar','Origins'),
    (null,'Boomerang','Origins'),
    (null,'Zero','Origins');

