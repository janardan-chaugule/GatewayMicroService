require('dotenv').config();
var http = require('http');
var express = require('express');

var indexRouter = require('./routes/index');
var orderRouter = require('./routes/orders');

var path = require('path');
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

 app.use('/order-api', indexRouter);
app.use('/order-api/orders', orderRouter);



const server = http.createServer(app);

server.listen(process.env.PORT || 3001);

server.on('listening', () => {
    console.log(`person service running`)
});


module.exports = app;