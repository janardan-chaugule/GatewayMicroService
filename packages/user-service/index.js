require('dotenv').config();
var http = require('http');
var express = require('express');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var personsRouter = require('./routes/persons');
var path = require('path');
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

 app.use('/user-api', indexRouter);
app.use('/user-api/users', usersRouter);
app.use('/user-api/persons', personsRouter);



const server = http.createServer(app);

server.listen(process.env.PORT || 3002);

server.on('listening', () => {
    console.log(`user service running`)
});


module.exports = app;