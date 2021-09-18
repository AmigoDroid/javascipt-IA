const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const boryParser = require('body-parser');
//const bodyParser = require('body-parser');

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json);
app.use(cors());