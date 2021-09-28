const express = require('express');
const Squelize = require('sequelize')
const name_database='de7g3fm34n6p8v';
const user='mkebhbglignllm';
const pass='738e21132b9d802c4fd1ee94665b0c9a064d982947028ca55aef16ae4cd2258e';
const porta=5432;
const url='ec2-44-199-26-122.compute-1.amazonaws.com';
const  tt ='postgres: // mkebhbglignllm : 738e21132b9d802c4fd1ee94665b0c9a064d982947028ca55aef16ae4cd2258e @ ec2-44-199-26-122.compute-1.amazonaws.com : 5432 / de7g3fm34n6p8';
let teste='';
const  db = new Squelize(name_database,user,pass,{host:url,port:porta,dialect:'mysql'
})
db.authenticate().then(function(){
    console.log('conectado');
    teste='conectado'

}).catch(function(erro){
    console.log('deu merda  '+erro)
    teste='NÃO conectado '+erro;

});
const bancodedados = express.Router();



bancodedados.get('/db',(req,res)=>{
    console.log('ok');
    res.send('deu certo: '+ teste)
})







module.exports = bancodedados;