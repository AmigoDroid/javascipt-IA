const express = require('express');
const routes = express.Router();


let db = [
    {'1':{Nome:'cliente 1', Idade: '20'}},
    {'2':{Nome:'cliente 2', Idade: '20'}},
    {'3':{Nome:'cliente 3', Idade: '20'}}
]

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