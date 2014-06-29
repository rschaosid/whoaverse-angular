var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

if (!process.env.HTTP_PORT || !process.env.COOKIE_SECRET) {
  throw new Error('Need HTTP_PORT and COOKIE_SECRET set');
}

app.set('port', process.env.HTTP_PORT);
app.set('cookie secret', process.env.COOKIE_SECRET)

app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser(app.get('cookie secret')));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join(__dirname, 'static')))

if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

http.createServer(app).listen(app.get('port'), function(){
  console.log('Listening on ' + app.get('port'));
});
