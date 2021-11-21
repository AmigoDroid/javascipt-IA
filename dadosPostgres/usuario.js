const Sequelize = require('sequelize');
const db= require('./config')


const usuario = db.define('usuario', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sobrenome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.INTEGER,
        allowNull: false
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