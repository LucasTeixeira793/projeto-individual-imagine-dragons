	'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Musica = sequelize.define('Musica',{
		idMusica: {
			field: 'idMusica',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		nomeMusica: {
			field: 'nomeMusica',
			type: DataTypes.STRING,
			allowNull: false
		},
		album: {
			field: 'album',
			type: DataTypes.STRING,
			allowNull: false
		}
	}, 
	{
		tableName: 'Musica', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Musica;
};
