const Sequelize = require('sequelize');

const name_database='jacirfab';
const user='jacirfab';
const pass='PeRRDsLYXyIpSlyVLgdPXio8M7RVjGZd';
const porta=5432;
const url='castor.db.elephantsql.com';

 

const sequelize = new Sequelize(name_database,user,pass,
    {
        host:url,
        dialect:'postgres'
    
    });

    sequelize.authenticate().then(()=>{
        console.log('conectado');
    }).catch(()=>{
        console.log('erro');
    });

module.exports = sequelize;