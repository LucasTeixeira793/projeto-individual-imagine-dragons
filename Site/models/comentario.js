	'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Comentario = sequelize.define('Comentario',{
		idComentario: {
			field: 'idComentario',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		dataComentario: {
			field: 'dataComentario',
			type: DataTypes.DATE,
			allowNull: false
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
		tableName: 'Comentario', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Comentario;
};
