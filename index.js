const express = require("express");
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express(); //the server

require('./routes/authRoutes')(app);

//req stands for request object
//res stands for response object
// app.get('/', (req,res)=> {
//   res.send({lol: 'no'});
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT);
