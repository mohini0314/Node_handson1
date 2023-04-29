const http = require('http')
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Node JS Handson 1');
        res.end();
    } 
    else if (req.url === '/api') {
        res.write(JSON.stringify([1, 2, 3, 4, 5]));
        res.end();
    }
}).listen(9000)