var gzippo = require('gzippo');
var logfmt = require("logfmt");
var express = require('express');
var app = express();
 
app.use(logfmt.requestLogger());
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.listen(process.env.PORT || 5000);