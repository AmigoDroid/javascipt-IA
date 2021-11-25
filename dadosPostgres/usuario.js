const sequelize = require('sequelize');
const db= require('./config')


const user = db.define('usuario', {
    id:{

        type: sequelize.INTEGER,
        allowNoll:false,
        autoIncrement:true,
        primaryKey:true
        
    },
    nome: {
        type: sequelize.STRING
    }, 
    sobrenome: {
        type: sequelize.STRING
    },
    cpf: {
        type: sequelize.STRING
    },
    saldo: {
        type: sequelize.STRING
    },
    usuario: {
        type: sequelize.STRING
    },
    senha: {
        type: sequelize.STRING
    }
})
module.exports = user;