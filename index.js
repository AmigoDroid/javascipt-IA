const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const boryparser = require('body-parser');
//const bodyParser = require('body-parser');

const app = express();
app.use(morgan('dev'));
app.use(boryparser.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

app.listen(2000,()=>{
    console.log('rodando na porta:2000');
})