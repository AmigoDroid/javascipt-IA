const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const boryparser = require('body-parser');

const routes = require('./routes');
const login = require('./login');
const appAndroid = require('./appAndroid');
//const bodyParser = require('body-parser');
var porta = process.env.PORT || 8877;

const app = express();
app.use(morgan('dev'));
app.use(boryparser.urlencoded({extended:false}));
app.use(express.json());
app.use(cors({
    origin:'*'
}));
app.use(routes);
app.use(appAndroid);
app.use(login);

app.listen(porta,()=>{
    console.log('rodando na porta: '+porta);
 
})
