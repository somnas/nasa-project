const http = require('http');
const express = require('express');

const PORT = process.env.PORT || 8000;

const app = express();

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

console.log(PORT);