const express = require('express');
const cors = require('cors');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const jokeRoutes = require('./routes/jokeRoutes');  

const app = express();

// Middleware pour le parsing des JSON
app.use(express.json());

// CORS Configuration
const corsOptions = {
    origin: 'https://fmilenkovic03.github.io',  // Permettre les requêtes de votre GitHub Page
    optionsSuccessStatus: 200,  // idk why i've put it there
};
app.use(cors(corsOptions));

// Swagger configuration
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Blagues',
            version: '1.0.0',
            description: 'Documentation de l\'API de gestion des blagues',
        },
        servers: [
            {
                url: 'http://localhost:3000/api/v1',
            },
        ],
    },
    apis: ['./src/routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Route de base pour l'API
app.get('/api/v1', (req, res) => {
    res.send('Bienvenue sur l\'API de Blagues !');
});

// Routes de blagues
app.use('/api/v1/jokes', jokeRoutes);

module.exports = app;
