// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Connectez-vous à MongoDB
mongoose.connect('mongodb+srv://Nicoder44:vgiR4JAZCwJl7Pth@cluster0.y7gx82u.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

// Votre modèle de données (utilisateur)
const User = mongoose.model('User', {
  username: String,
  email: String,
  password: String,
});

// Route d'inscription
app.post('/inscription', async (req, res) => {
  try {
    // Créez un nouvel utilisateur avec les données du formulaire
    const newUser = new User(req.body);
    await newUser.save();

    res.status(201).send(newUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Écoutez le serveur sur le port spécifié
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});


