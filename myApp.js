var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.get("/api/timestamp/:date_string", function(req, res) {   
  var dt;
  if (!isNaN(req.params.date_string))
  {
    dt = new Date();
  }
  else
  {
    dt = req.params.date_string;
  }
  res.json({"unixs": dt.getTime(),"utc": dt.toUTCString()});
});
module.exports = app;
