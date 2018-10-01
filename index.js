const express = require("express");
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User'); //this has to be before passport to make use of it
require('./services/passport');


mongoose.connect(keys.mongoURI);

const app = express(); //the server

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

//req stands for request object
//res stands for response object
// app.get('/', (req,res)=> {
//   res.send({lol: 'no'});
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT);
