var http = require('http'),
	app = require("./flight"),
	fs = require('fs');
	
app.get(/^/, function(req, res) {
	fs.stat(__dirname + '/' + req.url, function(err) {
		if( err ) { 
			res.writeHead(404); res.end();
		} else {
			fs.createReadStream(__dirname + '/' + req.url).pipe(res);	
		}
	});
}).get('/', function(req, res) {
	res.writeHead(200, { 'Content-Type': 'text/html' });
	fs.createReadStream(__dirname + '/index.html').pipe(res);	
});

exports.module = http.createServer(app);