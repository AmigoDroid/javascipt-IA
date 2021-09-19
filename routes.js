const express = require('express');
const routes = express.Router();


let usuarios ={
    '1':{Nome:'Luciano',SobreNome:'da silva costa',Cpf:0,Saldo:54280.78,Logado:true,usuariro:'admin',senha:0}
}

let usuario={
    Nome:'Luciano',Idade:'22',SobreNome:'da silva costa',Saldo:293752.13,Logado:true
}
function teste(user,pass){
    
}




//ROTAS DO MEU SERVIDOR
 routes.get('/',(req,res) =>{
    return res.end('<h1>ERRO GET 404!</h1>')
})

routes.get('/api',(req,res) => {
    return res.json(db);
});
routes.get('/api/usuario',(req,res)=>{
    return res.json(usuarios);
})
routes.post('/adduser',(req,res)=>{
    const dados = req.body;
    if(!body)
         return res.status(400).end();

    usuarios.push(dados)
    return res.json(dados);
})
routes.delete('/usuario/del=:id',(req,res)=>{
    const id = req.params.id;
});
module.exports = routes;