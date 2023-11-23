// UserProfile.js

const { useState } = React;
const UserProfile = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mdp: '',
    confmdp: '',
    naissance: '',
    bio: '',
  });

  const handleInputChange = (e) => {
    var { name, value } = e.target;
    if(name == 'mdp' || name == 'confmdp')
    {
      value = CryptoJS.MD5(value).toString();
    }
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = () => {
    if (user.mdp == user.confmdp){
      console.log('Informations du profil:', user);
    }else{
      console.log('Votre confirmation de mot de passe est différent de votre mot de passe');
    }
    // Ajoutez ici la logique pour envoyer les informations au backend si nécessaire
  };

  // Création des éléments sans JSX
  const form = React.createElement('form', null,
    React.createElement('label', null,
      'Prénom:',
      React.createElement('input', {
        type: 'text',
        name: 'firstName',
        onChange: handleInputChange
      })
    ),
    React.createElement('br', null),
    React.createElement('label', null,
      'Nom de famille:',
      React.createElement('input', {
        type: 'text',
        name: 'lastName',
        onChange: handleInputChange
      })
    ),
    React.createElement('br', null),
    React.createElement('label', null,
      'Email:',
      React.createElement('input', {
        type: 'email',
        name: 'email',
        onChange: handleInputChange
      })
    ),
    React.createElement('br', null),
    React.createElement('label', null,
      'Nouveau mdp:',
      React.createElement('input', {
        type: 'password',
        name: 'mdp',
        onChange: handleInputChange
    })
    ),React.createElement('label', null,
    'Confirmez mdp:',
      React.createElement('input', {
        type: 'password',
        name: 'confmdp',
        onChange: handleInputChange
    })
    ),
    React.createElement('br', null),
    React.createElement('label', null,
    'Date de naissance:',
      React.createElement('input', {
        type: 'date',
        name: 'naissance',
        onChange: handleInputChange
    })
    ),
    React.createElement('br', null),
    React.createElement('label', null,
      'Bio:',
      React.createElement('textarea', {
        name: 'bio',
        type: "password",
        rows: "10",
        cols: "50",
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
