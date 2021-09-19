const express = require('express');
const routes = express.Router();


let db = 
    {Nome:'Luciano', Idade: '20'}
   

routes.get('/',(req,res) =>{
    return res.json(
        {Nome:'ok'}
    )
})

routes.get('/api',(req,res) => {
    return res.json(db);
});

routes.post('/adduser',(req,res)=>{
    const dados = req.body;
    if(!body){
        return res.status(400).end();
    }
})



module.exports = routes;