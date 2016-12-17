var express = require('express');
var app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accent");
  next();
})
app.get('/users', function(req,res) {
  console.log(req.query);
  //?a=4&b=43
  res.send({data: req.query.a + req.query.b > 10});
});

app.listen(3000);
