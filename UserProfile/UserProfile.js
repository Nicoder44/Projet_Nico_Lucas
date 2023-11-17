// UserProfile.js
const { useState } = React;

const UserProfile = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    bio: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = () => {
    console.log('Informations du profil:', user);
    // Ajoutez ici la logique pour envoyer les informations au backend si nécessaire
  };

  // Création des éléments sans JSX
  const form = React.createElement('form', null,
    React.createElement('label', null,
      'Prénom:',
      React.createElement('input', {
        type: 'text',
        name: 'firstName',
        value: user.firstName,
        onChange: handleInputChange
      })
    ),
    React.createElement('br', null),
    React.createElement('label', null,
      'Nom de famille:',
      React.createElement('input', {
        type: 'text',
        name: 'lastName',
        value: user.lastName,
        onChange: handleInputChange
      })
    ),
    React.createElement('br', null),
    React.createElement('label', null,
      'Email:',
      React.createElement('input', {
        type: 'email',
        name: 'email',
        value: user.email,
        onChange: handleInputChange
      })
    ),
    React.createElement('br', null),
    React.createElement('label', null,
      'Bio:',
      React.createElement('textarea', {
        name: 'bio',
        value: user.bio,
        onChange: handleInputChange
      })
    ),
    React.createElement('br', null),
    React.createElement('button', {
      type: 'button',
      onClick: handleSubmit
    }, 'Enregistrer le profil')
  );

  return React.createElement('div', null,
    React.createElement('h2', null, 'Créer un profil utilisateur'),
    form
  );
};

// Rendre le composant UserProfile dans la racine de l'élément avec l'ID "root"
ReactDOM.render(
  React.createElement(UserProfile),
  document.getElementById('root')
);
