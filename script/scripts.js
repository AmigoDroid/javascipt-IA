const usuarios =[
    {id:'0', Nome:'Luciano',SobreNome:'da silva costa',Cpf:8476,Saldo:54280.78,usuario:'admin',senha:'0'},
    {id:'1',Nome:'Larissa',SobreNome:'gomes lima',Cpf:4657,Saldo:10000000,usuario:'Larissa123',senha:'5824'},
    {id:'2',Nome:'Luiz Gustavo',SobreNome:'lima costa',Cpf:4123,Saldo:54450280.78,usuario:'Gustavo123',senha:'5824'},
    {id:'3',Nome:'Wellington',SobreNome:'braz',Cpf:1520,Saldo:18758250.51,usuario:'braz01',senha:'0'},
    {id:'4',Nome:'Xuxa da silva',SobreNome:'braz',Cpf:4647,Saldo:18750.21,usuario:'xuxa01',senha:'xuxa'},
    {id:'5',Nome:'Isael Filho',SobreNome:'costa',Cpf:8740,Saldo:2.71,usuario:'Filhinho',senha:'0'},
    {id:'6',Nome:'Olá Visitante',SobreNome:'',Cpf:12345678909,Saldo:20,usuario:'Visitar',senha:'1234'}
    ]
//DADOS DE LOGIN

module.exports = {
//FUNÇÃO DE AUTENTICAÇÃO
  
     async checar_user(req,res){
     const body = req.body;
    console.log(usuarios);
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
                saldo:usuarios[i].Saldo,
                cpf:usuarios[i].Cpf
            }
            //retorna nome e saldo;
            return res.json(body);
            break;
        }else{
            if(i>=id){
                console.log('nao logado');
                //retornar algum erro
                let body ={
                    logado:false
                }
                return res.json(body);
                break;
}}}},//end

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


    };
