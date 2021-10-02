const express = require('express');
const appAndroid = express.Router();

let usuarios =[
    {id:'0', Nome:'Luciano',SobreNome:'da silva costa',Cpf:8476,Saldo:54280.78,usuario:'admin',senha:'0'},
    {id:'1',Nome:'Larissa',SobreNome:'gomes lima',Cpf:4657,Saldo:10000000,usuario:'Larissa123',senha:'5824'},
    {id:'2',Nome:'Luiz Gustavo',SobreNome:'lima costa',Cpf:4123,Saldo:54450280.78,usuario:'Gustavo123',senha:'5824'},
    {id:'3',Nome:'Wellington',SobreNome:'braz',Cpf:1520,Saldo:18758250.51,usuario:'braz01',senha:'0'},
    {id:'4',Nome:'Xuxa da silva',SobreNome:'braz',Cpf:4647,Saldo:18750.21,usuario:'xuxa01',senha:'xuxa'},
    {id:'5',Nome:'Isael Filho',SobreNome:'costa',Cpf:8740,Saldo:2.71,usuario:'Filhinho',senha:'0'},
    {id:'6',Nome:'Olá Visitante',SobreNome:'',Cpf:12345678909,Saldo:20,usuario:'Visitar',senha:'1234'}
    ]

const usuario = {
    logado:false,
    Nome:'',
    SobreNome:'',
    Cpf:'',
    Saldo:'',
    usuario:'',
    senha:''
}
function dadosUser(position){
    let id = position;
    usuario.Nome=usuarios[id].Nome;
    usuario.SobreNome=usuarios[id].SobreNome;
    usuario.Cpf=usuarios[id].Cpf;
    usuario.Saldo=usuarios[id].Saldo;
    usuario.logado=true;
    return usuario;
}

function userInfo(username,password){
    let uss = username;
    let paser= password;
    for (let i =0; i <= usuarios.length-1;i++){
        let user = usuarios[i].usuario;
        let pass = usuarios[i].senha;

        console.log('meu use: '+uss+' : '+user);

        if(user===uss && pass === paser){
            let resposta = dadosUser(i);
            return resposta;
        }else{
            //não existe
            if(i>=usuarios.length-1){
                return {logado:false} ; 
            }
           
        }
    }

}

appAndroid.get('/app/login/:user/:pass',(req,res)=>{
   // let us = req.params.user;
   // let ps = req.params.pass;
    let resposta =  userInfo(req.params.user,req.params.pass);

    return res.json(resposta);

})



module.exports=appAndroid;