var express = require('express');
var app     = express();

app.set('view engine', 'pug');

var routes = require('./routes');
//var path = require('path');
//app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static('public'));

// Routes
// home
app.get('/', routes.home);

// movie_single
app.get('/star_wars_episode/:episode_number?', routes.movie_single);

// notFound
app.get('*', routes.notFound);

//app.listen(3000, function() {
//  console.log('App is running on port 3000');
//});

app.listen(process.env.PORT || 3000);