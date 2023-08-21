var http = require('http');
var server = http.createServer((req, res) => {

    if (req.url == "/") {
        res.writeHead(200,{ 'content-Type': 'text/html' });
        res.write('<h1>This is a home page</h1>');
        res.end();
    }
    else if (req.url == "/about") {
        res.writeHead(200,{ 'content-Type': 'text/html' });
        res.write('<h1>This is an about page</h1>');
        res.end();
    }
    else if (req.url == "/contact") { // Use '==' for comparison
        res.writeHead(200,{ 'content-Type': 'text/html' });
        res.write('<h1>This is a contact page</h1>');
        res.end();
    }

})
server.listen(5051);
console.log("Server running successfully on port 5050");
