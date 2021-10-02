const express = require('express');
const appAndroid = express.Router();


const usuario = {
    Nome:'Luciano',
    SobreNome:'da silva costa'
    ,Cpf:8476,
    Saldo:54280.78
    ,usuario:'admin'
    ,senha:'0'
}
function userInfo(user,pass){
    

}

appAndroid.get('/app/login/:user/:pass',(req,res)=>{
    let us = req.params.user;
    let ps = req.params.pass;
    userInfo(us,ps);

    return res.json(usuario);

})



module.exports=appAndroid;