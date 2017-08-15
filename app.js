var express = require('express');
var path = require('path');
var swig = require('swig');

var app = express();
var port = process.env.PORT || 3000;

// app.use('/static', express.static(path.join(__dirname,'public')));
   app.use('/static', express.static(path.join(__dirname, 'public')))

swig.setDefaults({
  cache: false
})
app.set('view cache', false);
app.set('views', './views');
app.set('view engine', 'html');
app.engine('html', swig.renderFile);

var server = app.listen(port, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log('express app listening at http://%s%s', host, port);
})

app.get('/', function(req, res, next){
  res.render('app/index', {
    title:'首页'
  })
})



