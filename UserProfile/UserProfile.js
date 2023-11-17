import React, { useState } from 'react';

const UserProfile = () => {
  // Utilisez le state pour stocker les informations du profil
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    bio: '',
  });

  // Fonction de gestion des changements de formulaire
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // Fonction de gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Vous pouvez ajouter ici la logique pour envoyer les informations du profil au backend
    console.log('Informations du profil soumises :', user);
  };

  return (
    <div>
      <h2>Créer un profil utilisateur</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Prénom:
          <input
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Nom de famille:
          <input
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Bio:
          <textarea
            name="bio"
            value={user.bio}
            onChange={handleInputChange}
          ></textarea>
        </label>
        <br />
        <button type="submit">Enregistrer le profil</button>
      </form>
    </div>
  );
};

export default UserProfile;