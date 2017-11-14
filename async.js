
var http = require("http");
var fs = require("fs");

http.createServer(function (request, response) {
    fs.readFile('Vagrantfile', 'utf8', function(err, contents) {
        console.log(contents);
    });

}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');