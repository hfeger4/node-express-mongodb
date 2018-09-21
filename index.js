const express = require('express');
const app = express(); //the server

//req stands for request object
//res stands for response object
app.get('/', (req,res)=> {
  res.send({lol: 'no'});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);
