var http = require('http');
var bodyParser = require('body-parser');
var express = require("express");
var app = express();

app.use(bodyParser.json());

var controllers = require("./controllers");
controllers.init(app);

var server = http.createServer(app);
server.listen(3000);
