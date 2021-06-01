	'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Curtida = sequelize.define('Curtida',{
		fkUser: {
			field: 'fkUser',
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		fkComentario: {
			field: 'fkComentario',
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		}
	}, 
	{
		tableName: 'Curtida', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Curtida;
};
