// server.js
var http = require("http"); // 1 - Import Node.js core module
var server = http.createServer(function (req, res) {   //create web server
    if (req.url == "/") { //check the URL of the current request
        
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
        // set response content    
        res.write('<html><body><p>This is home Page.</p></body></html>');
        res.end();
    
    }
    else if (req.url == "/profile") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        res.write('<html><body><p>Saya diberi Nama oleh kedua orang tua yaitu Ghani Muttaqin.</p></body></html>');
        res.write('<html><body><p>Umur saya sekarang beranjak 23.</p></body></html>');
        res.end();
    
    }
    else if (req.url == "/contact") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        res.write('<html><body><p>Email Saya adalah ghanimuttaqin@gmail.com.</p></body></html>');
        res.write('<html><body><p>Alamat yang saya sukai Jalan yang benar.</p></body></html>');
        res.end();
    
    
    }
    else if (req.url == "/aboutus") {
        
        res.writeHead(300, { 'Content-Type': 'text/html' }); 
        res.write('<html><body><p>This is what u should know about me.</p></body></html>');
        res.write('<html><body><p>I am a boy.</p></body></html>');
        res.end();
        
    }
    else
        res.end('Invalid Request!');
});
server.listen(3000); //3 - listen for any incoming requests
console.log("Node.js web server at port 3000 is running...");