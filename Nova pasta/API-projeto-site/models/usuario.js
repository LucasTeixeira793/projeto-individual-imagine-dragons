	// 'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Usuario = sequelize.define('usuario',{
		idUser: {
			field: 'idUser',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		nomeUser: {
			field: 'nomeUser',
			type: DataTypes.STRING,
			allowNull: false
		},
		nickname: {
			field: 'nickname',
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			field: 'email',
			type: DataTypes.STRING,
			allowNull: false
		},
		senha: {
			field: 'senha',
			type: DataTypes.STRING,
			allowNull: false
		}
	}, 
	{
		tableName: 'usuario', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Usuario;
};
