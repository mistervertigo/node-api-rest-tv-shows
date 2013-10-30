var express = require("express"),
    app     = express(),
    http    = require("http"),
    server  = http.createServer(app);
	 mongoose = require('mongoose'); 
	 routes = require('./routes');
	 path = require('path');

app.configure(function () {
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'jade');
  app.use(express.logger('dev'));
  app.use(express.static(path.join(__dirname, 'public')));
});


app.get('/', function(req, res){
  res.render('index', {
    title: 'Añade una serie de TV'
  });
});

var uristring = 
  process.env.MONGOLAB_URI || 
  process.env.MONGOHQ_URL || 
  'mongodb://localhost/tvshows';

mongoose.connect('mongodb://localhost/tvshows', function(err, res) {
  if(err) {
    console.log('ERROR: connecting to Database. ' + uristring + '. ' + err);
  } else {
    console.log('Connected to Database ' + uristring);
  }
});

routes = require('./routes/tvshows')(app);

server.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});