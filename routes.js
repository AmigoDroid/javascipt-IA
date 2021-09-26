
const { json, text } = require('body-parser');
const express = require('express');
const routes = express.Router();

routes.use(require('./login'));

//ROTAS DO MEU SERVIDOR
 routes.get('/',(req,res) =>{
    return res.end('<h1>Voçê não tem permição</h1>')
})

//deletar usuario
routes.delete('/usuario/del=:id',(req,res)=>{
    const id = req.params.id;
});





module.exports = routes;