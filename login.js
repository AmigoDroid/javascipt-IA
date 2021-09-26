const express = require('express');
const login = express.Router();

//DADOS DE LOGIN
let usuarios =[
    {id:'0', Nome:'Luciano',SobreNome:'da silva costa',Cpf:8476,Saldo:54280.78,usuario:'admin',senha:'0'},
    {id:'1',Nome:'Larissa',SobreNome:'gomes lima',Cpf:4657,Saldo:10000000,usuario:'Larissa123',senha:'5824'},
    {id:'2',Nome:'Luiz Gustavo',SobreNome:'lima costa',Cpf:4123,Saldo:54450280.78,usuario:'Gustavo123',senha:'5824'},
    {id:'3',Nome:'Wellington',SobreNome:'braz',Cpf:1520,Saldo:18758250.51,usuario:'braz01',senha:'0'},
    {id:'4',Nome:'Xuxa da silva',SobreNome:'braz',Cpf:4647,Saldo:18750.21,usuario:'xuxa01',senha:'xuxa'},
    {id:'5',Nome:'Isael Filho',SobreNome:'costa',Cpf:8740,Saldo:2.71,usuario:'Filhinho',senha:'0'},
    {id:'6',Nome:'Olá Visitante',SobreNome:'',Cpf:00000000000,Saldo:20,usuario:'Visitar',senha:'1234'}
    ]

//FUNÇÃO DE AUTENTICAÇÃO
function checar_user(body){
    let numUsers = usuarios.length;
    let id = parseInt(numUsers);
    id-=1;
    let UsuarioId = body.usuario;
    let SenhaId = body.senha;
    //iniciar busca
    for(i=0;i<=id;i++){
        //laço for buscar usuario
        let usere = usuarios[i].usuario;
        let pass = usuarios[i].senha;
        if(UsuarioId===usere && SenhaId===pass){
            let body ={
                logado:true,
                nome:usuarios[i].Nome,
                saldo:usuarios[i].Saldo
            }
            //retorna nome e saldo;
            return body;
            break;
        }else{
            if(i>=id){
                console.log('nao logado');
                //retornar algum erro
                let body ={
                    logado:false
                }
                let res;
                return body;
                break;
}}}}//end

function vercpf(num_cpf){
    let id = usuarios.length;
    id-=1;
    console.log(id);
 for(i=0; i<=id;i++){
 var cpf = usuarios[i].Cpf;
 if(num_cpf.cpf == cpf){
     //sim
     var body = {
         Ifcpf:true,
         Id:id,
         Saldo:usuarios[i].Saldo,
         Nome:usuarios[i].Nome,
         Cpf:usuarios[i].Cpf,
         SobreNome:usuarios[i].SobreNome
     }
     return body;
 }else{
     if(i>=id){
         var body = {
             Ifcpf:false
             }
             return body
     }}}}//end









login.post('/login',(req,res)=>{
    var body = req.body;

    if(!body){
      return  res.sendStatus(400).end();
    }else{
        //chamar funcao
      let responder =  checar_user(body);
      return res.json(responder);
    }
});

login.post('/adduser',(req,res)=>{
    const body = req.body;
    if(!body)
         return res.status(400).end();

    usuarios.push(body)
    console.log(body);
    return res.json({'resposta':true});
    //
});

//api de listar usuario
login.get('/api/usuario',(req,res)=>{
    return res.json(usuarios);
});

login.post('/api/user-cpf',(req,res)=>{
    var teste = req.body;
    let rep = vercpf(teste)
     return res.json(rep);
});





module.exports=login;