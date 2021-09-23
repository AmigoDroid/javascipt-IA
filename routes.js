
const { json, text } = require('body-parser');
const express = require('express');
const routes = express.Router();
//const { testebr } = require('./gatopreto');


//routes.usere(testebr)

//banco de dados remoto de execução
let usuarios =[
        {id:'0', Nome:'Luciano',SobreNome:'da silva costa',Cpf:8476,Saldo:54280.78,usuario:'admin',senha:'0'},
        {id:'1',Nome:'Larissa',SobreNome:'gomes lima',Cpf:4657,Saldo:10000000,usuario:'Larissa123',senha:'5824'},
        {id:'2',Nome:'Luiz Gustavo',SobreNome:'lima costa',Cpf:4123,Saldo:54450280.78,usuario:'Gustavo123',senha:'5824'},
        {id:'3',Nome:'Wellington',SobreNome:'braz',Cpf:1520,Saldo:18758250.51,usuario:'braz01',senha:'0'},
        {id:'4',Nome:'Xuxa da silva',SobreNome:'braz',Cpf:4647,Saldo:18750.21,usuario:'xuxa01',senha:'xuxa'},
        {id:'5',Nome:'Isael Filho',SobreNome:'costa',Cpf:8740,Saldo:2.71,usuario:'Filhinho',senha:'0'}
        ]


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
            }
        }
    }
}




//ROTAS DO MEU SERVIDOR
 routes.get('/',(req,res) =>{
    return res.end('<h1>Voçê não tem permição</h1>')
})




//verificar login
routes.post('/logar/user',(req,res)=>{
    //vamos chamar uma funçao para verificar
    var body = req.body;
    if(!body){
      return  res.sendStatus(400).end();
    }else{
        //chamar funcao
      let responder =  checar_user(body);
      return res.json(responder);
    }
})




//api de listar usuario
routes.get('/api/usuario',(req,res)=>{
    return res.json(usuarios);
})



//cadastrar usuario
routes.post('/adduser',(req,res)=>{
    const body = req.body;
    if(!body)
         return res.status(400).end();

    usuarios.push(body)
    console.log(body);
    return res.json({'resposta':true});
    //
})


//deletar usuario
routes.delete('/usuario/del=:id',(req,res)=>{
    const id = req.params.id;
});

//iiniciando busca do cpf
routes.post('/cpf',(req,res)=>{
  var teste = req.body;
  let rep = vercpf(teste)
   return res.json(rep);
});
function vercpf(gpo){
   let id = usuarios.length;
   id-=1;
   console.log(id);
for(i=0; i<=id;i++){
var cpf = usuarios[i].Cpf;
if(gpo.cpf == cpf){
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
    }
}
}
}
routes.post('/api/cpf/pix-pagar')
module.exports = routes;