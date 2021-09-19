const express = require('express');
const routes = express.Router();


let db ={
        Esposa:'Larissa',Idade:'16',
        filho:'Gustavo',Idade:'2'}

let usuario={
    Nome:'Luciano',Idade:'20'
}

routes.get('/',(req,res) =>{
    return res('<h1> ERRO 404! </h1>')
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