const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express(); //the server

passport.use(new GoogleStrategy());
//console.developers.google.com


//req stands for request object
//res stands for response object
// app.get('/', (req,res)=> {
//   res.send({lol: 'no'});
// });





const PORT = process.env.PORT || 3000;
app.listen(PORT);
