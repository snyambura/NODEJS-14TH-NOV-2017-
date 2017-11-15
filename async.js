
var http = require("http");
var fs = require("fs");

// http.createServer(function (request, response) {
//
//
// }).listen(8081);

fs.readFile('Vagrantfile', 'utf8', function(err, contents) {
    console.log(contents);

});

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');