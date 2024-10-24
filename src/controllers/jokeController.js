const jokes = []; // Remplacer cela par base de données réelle

// Ajouter une blague
exports.addJoke = (req, res) => {
    const { content } = req.body;
    if (!content) {
        return res.status(400).json({ message: 'Content is required' });
    }
    const newJoke = { id: jokes.length + 1, content };
    jokes.push(newJoke);
    res.status(201).json(newJoke);
};

// Obtenir toutes les blagues
exports.getJokes = (req, res) => {
    res.status(200).json(jokes);
};

// Obtenir une blague par ID
exports.getJokeById = (req, res) => {
    const { id } = req.params;
    const joke = jokes.find(j => j.id === parseInt(id));
    if (!joke) {
        return res.status(404).json({ message: 'Joke not found' });
    }
    res.status(200).json(joke);
};

// Obtenir une blague aléatoire
exports.getRandomJoke = (req, res) => {
    if (jokes.length === 0) {
        return res.status(404).json({ message: 'No jokes available' });
    }
    const randomIndex = Math.floor(Math.random() * jokes.length);
    const randomJoke = jokes[randomIndex];
    res.status(200).json(randomJoke);
};