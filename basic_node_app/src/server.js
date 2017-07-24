var express = require('express');

var uri_logger = require(__dirname + '/middlewares/logger.js');
var rest_router = require(__dirname + '/routes/rest/rest.js');

/* configuring application */
var app = express();
app.set('port', (process.env.PORT || 5000));

/* defining public directory */
app.use(express.static(__dirname + '../public'));

/* defining url logger middleware */
app.use(uri_logger);

/* views is directory for all template files */
app.set('views', __dirname + '/../templates');
app.set('view engine', 'ejs');


/* defining application urls */
app.get('/', function(req, res){
	res.render('index', { title: 'Hey', message: 'Hello there! Welcome to basic node app.' })
})


/* defining application routes */
app.use('/rest', rest_router);


/* running server */
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
