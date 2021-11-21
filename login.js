const express = require('express');
const login = express.Router();
const script = require('./script/scripts');

login.post('/login',script.checar_user);

login.post('/adduser',script.cadastrar);

//api de listar usuario
login.get('/api/usuario',(req,res)=>{
    return res.json(usuarios);
});

login.post('/api/user-cpf',script.vercpf);

login.get('/criar/tabela/admin',script.criartb);




module.exports=login;