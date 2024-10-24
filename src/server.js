const http = require('http');
const app = require('./app');  
const cors = require('cors');
// const hostname = 'localhost';   // Pour développement local

app.use(cors({
    origin: 'https://fmilenkovic03.github.io', 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
}));

const port = process.env.PORT;  // Correction ici
const server = http.createServer(app);

server.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${port}/api/v1`);
});
