const Sequelize = require('sequelize');
const {database,usuario,senha,host} = require('./config.db');

const sequelize = new Sequelize(database,usuario,senha,
    {
        host:host,
        dialect:'postgres'
    });

    sequelize.authenticate().then(()=>{
        console.log('conectado');
    }).catch(()=>{
        console.log('erro');
    });

module.exports = sequelize;