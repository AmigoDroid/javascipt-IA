const express = require('express');
const routes = express.Router();


let usuarios =[
        {id:'0', Nome:'Luciano',SobreNome:'da silva costa',Cpf:0,Saldo:54280.78,usuario:'admin',senha:0},
        {id:'1',Nome:'Larissa',SobreNome:'gomes lima',Cpf:0,Saldo:10000000,usuario:'Larissa123',senha:5824},
        {id:'2',Nome:'Luiz Gustavo',SobreNome:'lima costa',Cpf:0,Saldo:54450280.78,usuario:'Gustavo123',senha:5824},
        {id:'3',Nome:'wheliton',SobreNome:'braz',Cpf:0,Saldo:18754250.51,usuario:'braz01',senha:0}
        
]
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
    const body = req.body;
    if(!body)
         return res.status(400).end();

    usuarios.push(body)
    console.log(body);
    return res.json({'resposta':true});
    //
})
routes.delete('/usuario/del=:id',(req,res)=>{
    const id = req.params.id;
});
module.exports = routes;