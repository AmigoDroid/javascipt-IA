const { json, text } = require('body-parser');
const express = require('express');
const routes = express.Router();
//banco de dados remoto de execução
let usuarios =[
        {id:'0', Nome:'Luciano',SobreNome:'da silva costa',Cpf:0,Saldo:80.18,usuario:'admin',senha:'0'},
        {id:'1',Nome:'Larissa',SobreNome:'gomes lima',Cpf:0,Saldo:10000000,usuario:'Larissa123',senha:'5824'},
        {id:'2',Nome:'Luiz Gustavo',SobreNome:'lima costa',Cpf:0,Saldo:54450280.78,usuario:'Gustavo123',senha:'5824'},
        {id:'3',Nome:'Wellington',SobreNome:'braz',Cpf:0,Saldo:18758250.51,usuario:'braz01',senha:'0'},
        {id:'4',Nome:'Xuxa da silva',SobreNome:'sei la',Cpf:0,Saldo:18750.21,usuario:'xuxa01',senha:'xuxa'},
        {id:'5',Nome:'Isael Filho',SobreNome:'da silva',Cpf:0,Saldo:117.93,usuario:'Filhinho',senha:'0'}
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
   teste()
  //  console.log(s);
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
module.exports = routes;
