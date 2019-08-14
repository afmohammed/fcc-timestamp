// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var myApp = require('./myApp');
// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/timestamp/", function(req, res) {     
  var newDt = new Date();   
  var dt = newDt.getDate();  
  res.json({"unix": newDt.getTime(),"utc": newDt.toUTCString()});  
  
});

app.get("/api/timestamp/:date_string", function(req, res) {   
  var dt = req.params.date_string.replace(":","");  
  var intDt = Number(dt);
  console.log("1" + dt);
  if (dt == intDt){
      console.log("unix value" + intDt);
      dt = intDt;
    }
  var convertedDate = new Date(dt);    
  res.json({"unix": convertedDate.getTime(),"utc": convertedDate.toUTCString()});  
  
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});