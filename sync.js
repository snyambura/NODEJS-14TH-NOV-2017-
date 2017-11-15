
var http = require("http");
var fs = require("fs");
var contents = fs.readFileSync('Vagrantfile', 'utf8');
console.log(contents.toString());

// http.createServer(function (request, response) {
//
// }).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');