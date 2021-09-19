const express = require('express');
const routes = express.Router();


let db ={
        Esposa:'Larissa',IdadeEsposa:'16',
        filho:'Gustavo',IdadeFilho:'2'}

let usuario={
    Nome:'Luciano',Idade:'22',SobreNome:'da silva costa',Saldo:293752.13,Logado:true
}

 routes.get('/',(req,res) =>{
    return res.end('<h1>ERRO GET 404!</h1>')
})

routes.get('/api',(req,res) => {
    return res.json(db);
});
routes.get('/usuario',(req,res)=>{
    return res.json(usuario)  
})
routes.post('/adduser',(req,res)=>{
    const dados = req.body;
    if(!body){
        return res.status(400).end();
    }
})



module.exports = routes;