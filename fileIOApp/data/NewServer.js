const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Server is running on port 9921\n');
});

const PORT = 9921;
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});