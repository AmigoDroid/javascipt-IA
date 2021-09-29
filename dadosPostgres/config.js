const Sequelize = require('sequelize');
const db = new Sequelize('postgres://mkebhbglignllm:738e21132b9d802c4fd1ee94665b0c9a064d982947028ca55aef16ae4cd2258e@ec2-44-199-26-122.compute-1.amazonaws.com:5432/de7g3fm34n6p8v',{dialect:'postgres'});

module.exports=db;