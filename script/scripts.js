const usuarios =[
    {id:'0', Nome:'Luciano',SobreNome:'da silva costa',Cpf:8476,Saldo:54280.78,usuario:'admin',senha:'0'},
    {id:'1',Nome:'Larissa',SobreNome:'gomes lima',Cpf:4657,Saldo:10000000,usuario:'Larissa123',senha:'5824'},
    {id:'2',Nome:'Luiz Gustavo',SobreNome:'lima costa',Cpf:4123,Saldo:54450280.78,usuario:'Gustavo123',senha:'5824'},
    {id:'3',Nome:'Wellington',SobreNome:'braz',Cpf:1520,Saldo:18758250.51,usuario:'braz01',senha:'0'},
    {id:'4',Nome:'Xuxa da silva',SobreNome:'braz',Cpf:4647,Saldo:18750.21,usuario:'xuxa01',senha:'xuxa'},
    {id:'5',Nome:'Isael Filho',SobreNome:'costa',Cpf:8740,Saldo:2.71,usuario:'Filhinho',senha:'0'},
    {id:'6',Nome:'Olá Visitante',SobreNome:'',Cpf:12345678909,Saldo:20,usuario:'Visitar',senha:'1234'}
    ]
    //FERRAMENTAS
    const sequelize = require('sequelize');
    const user = require('../dadosPostgres/usuario');
    const db = require('../dadosPostgres/database');
    const wt = require('jsonwebtoken');
    const secret = 'zongi.sa-582426600'
    
    
//DADOS DE LOGIN

module.exports = {
//FUNÇÃO DE AUTENTICAÇÃO
  
async checar_user(req,res){
     const body = req.body;
     const {usuario,senha}= body;
     const dados = await user.findAll();
     const positions = dados.length;
     if(positions<=0){
         return res.json({resposta:false,code:504})
     }else{
         for(let i =0;i<positions;i++){ 

             let userID=dados[i].usuario;
             let passID=dados[i].senha;

             if(usuario==userID && senha==passID){
                 const idUser = dados[i].id;
                 const token = wt.sign({idUser},secret,{expiresIn:300});
                res.json({resposta:true,token:token,code:1})
                break;
             }else{
                 if(i>=positions){
                     res.json({resposta:false,code:404})
                     break;
                 }
             }
         }
     }

  
         },
//VERIFICAR CPF
async vercpf(req,res){
    const num_cpf=req.body;
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
     return res.json(body);
 }else{
     if(i>=id){
         var body = {
             Ifcpf:false
             }
             return res.json(body);
     }}}}//end;

,
//CRIAR TABELA
async criartb(req,res){
    db.sync().then(()=>{
        res.send('tabela criada');
    }).catch(()=>{
        res.send('falha');
    })
},
async cadastrar(req,res){
    const dados = req.body;
    let df= await user.create(dados);
    return res.json({resposta:true})
}
  };