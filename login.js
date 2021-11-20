const express = require('express');
const login = express.Router();
const script = require('./script/scripts');

login.post('/login',script.checar_user);

login.post('/adduser',(req,res)=>{
    const body = req.body;
    if(!body)
         return res.status(400).end();

    usuarios.push(body)
    console.log(body);
    return res.json({'resposta':true});
    //
});

//api de listar usuario
login.get('/api/usuario',(req,res)=>{
    return res.json(usuarios);
});

login.post('/api/user-cpf',(req,res)=>{
    var teste = req.body;
    let rep = vercpf(teste)
     return res.json(rep);
});





module.exports=login;