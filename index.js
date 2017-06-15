var express = require('express');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' })

var app = express();

var port = process.env.PORT || 3000;

function urlRoute(req, res) {
	var search = req.params[0];
	res.json(search);
}

app.listen(port, function() {
	console.log('Example app listening on port ' + 3000);
})

app.post('/api/upload', upload.any('fileToSize'), function(req, res, next){
  var obj = req.files[0];
  var size = req.files[0].size
  console.log(req.files[0]);
  res.json({'size': size});
});


app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html')
})

module.exports = app;
