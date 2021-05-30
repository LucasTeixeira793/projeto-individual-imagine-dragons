	'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Comentario = sequelize.define('comentario',{
		idComentario: {
			field: 'idComentario',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		comentario: {
			field: 'comentario',
			type: DataTypes.STRING,
			allowNull: false
		},
		fkUser: {
			field: 'fkUser',
			type: DataTypes.INTEGER,
			allowNull: false
		},
		fkMusica: {
			field: 'fkMusica',
			type: DataTypes.INTEGER,
			allowNull: false
		}
	}, 
	{
		tableName: 'comentario', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Comentario;
};
