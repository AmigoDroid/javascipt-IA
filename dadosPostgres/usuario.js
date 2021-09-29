const Sequelize = require('sequelize');
const database= require('./config')


const usuario = database.define('usuario', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sobrenome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.INTEGER
    },
    saldo: {
        type: Sequelize.FLOAT,allowNull:false
    },
    usuario: {
        type: Sequelize.STRING,allowNull:false
    },
    senha: {
        type: Sequelize.STRING,allowNull:false
    }
})
module.exports=usuario;