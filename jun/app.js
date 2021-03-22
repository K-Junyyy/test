var app = require('express')();
var express = require('express');
var server = require('http').Server(app);
var io = require('socket.io')(server);
var bodyParser = require('body-parser');

server.listen(3000, function () {
  console.log('Example!');
});

app.use(bodyParser.json())
app.use(express.urlencoded( {extended : false } ));

app.get('/', function(req, res){
  console.log('what??' + __dirname);
  res.sendFile(__dirname + "/main.html");
});

//AJAX GET METHOD
app.get('/api/get',function(req,res) {

      var data = req.query.data;

      console.log('GET Parameter = ' + data);


      var result = data + ' Succese';

      console.log(result);


      res.send({result:result});

});


//AJAX POST METHOD
app.post('/api/post', function(req, res){
  console.log(req.body.data)
  var data = req.body.data;

  console.log('POST Parameter = ' + data);


  var result = data + ' Succese';

      console.log(result);

      res.send({result:result});

});
