const express = require('express');
const login = express.Router();
const script = require('./script/scripts');
const wt = require('jsonwebtoken');
const secret = 'zongi.sa-582426600'

function altenticar(req,res,next){
    const dados = req.body;
    const token = dados.token;

    wt.verify(token,secret , function(err,decoded){
        if(err){
           return res.json({resposta:false});
        }else{
            res.json({resposta:true});
            next();
        }
    })
}

function homeLogado(req,res,next){
    const token = req.params.token;

    wt.verify(token,secret , function(err,decoded){
        if(err){
           return res.json({resposta:false});
        }else{
            res.json({resposta:true});
            next();
        }
    })
}

login.post('/login',script.checar_user);

login.post('/adduser',script.cadastrar);

//api de listar usuario
login.get('/api/usuario',(req,res)=>{
  
});
login.get('/home/:token',homeLogado);


login.post('/api/user-cpf',script.vercpf);

login.get('/criar/tabela/admin',script.criartb);




module.exports=login;