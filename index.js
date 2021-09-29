const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const boryparser = require('body-parser');
const Siquelize =  require('sequelize')

const routes = require('./routes')
const usuario = require('./dadosPostgres/usuario');
//const bodyParser = require('body-parser');
var porta = process.env.PORT || 8877;

const app = express();
app.use(morgan('dev'));
app.use(boryparser.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());
app.use(routes);



const name_database='de7g3fm34n6p8v';
 const user='mkebhbglignllm';
 const pass='738e21132b9d802c4fd1ee94665b0c9a064d982947028ca55aef16ae4cd2258e';
 const portta=5432;
 const url='ec2-44-199-26-122.compute-1.amazonaws.com';
 const config = require('./config.json')

const data = new Siquelize(config.database,config.username,config.password,
    {
    host:url,
    logging:false,
    schema:'public',
    dialect:'postgres'
});
data.authenticate().then(function(){
    console.log('conected...');
}).catch(function(erro){
    console.log('not conected '+erro);
});





app.listen(porta,()=>{
    console.log('rodando na porta: '+porta);
 
})
