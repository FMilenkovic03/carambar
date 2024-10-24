const express = require('express');
const router = express.Router();
const jokeController = require('../controllers/jokeController');

// Route pour obtenir une blague aléatoire
router.get('/random', jokeController.getRandomJoke);

/**
 * @swagger
 * /jokes:
 *   get:
 *     summary: Get all jokes
 *     responses:
 *       200:
 *         description: List of jokes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   content:
 *                     type: string
 *       500:
 *         description: Server error
 */
router.get('/', jokeController.getJokes);

/**
 * @swagger
 * /jokes:
 *   post:
 *     summary: Add a new joke
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *     responses:
 *       201:
 *         description: Joke added successfully
 *       500:
 *         description: Server error
 */
router.post('/', jokeController.addJoke);

// Route pour obtenir une blague par ID
router.get('/:id', jokeController.getJokeById); // get by ID

module.exports = router;
