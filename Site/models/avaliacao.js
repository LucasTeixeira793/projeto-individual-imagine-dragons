	'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Avaliacao = sequelize.define('Avaliacao',{
		idAvaliacao: {
			field: 'idAvaliacao',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		fkMusica: {
			field: 'fkMusica',
			type: DataTypes.INTEGER,
			primaryKey: true
		},
		fkUser: {
			field: 'fkUser',
			type: DataTypes.INTEGER,
			primaryKey: true
		},
		// dataAvaliacao: {
		// 	field: 'dataAvaliacao',
		// 	type: DataTypes.DATE,
		// 	primaryKey: true
		// },
		avaliacao: {
			field: 'avaliacao',
			type: DataTypes.INTEGER,
			allowNull: false
		}
	}, 
	{
		tableName: 'Avaliacao', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Avaliacao;
};
