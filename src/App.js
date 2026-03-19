// App.js
// App.js
import HelloWorld from './HelloWorld';
import Greeting from './Greeting';
import Profil from './Profil';
import Vehicule from './Vehicule';
import ListeCourses from './ListeCourses';

function App() {
  // Définition des données utilisateur
  const utilisateur = { 
    nom: 'Emma', 
    photo: '/user.png'  
  };

  // Trois listes de courses différentes
  const listeLegumes = ['Carottes', 'Tomates', 'Salade', 'Concombres'];
  const listeFruits = ['Pommes', 'Bananes', 'Oranges', 'Fraises', 'Kiwis'];
  const listeMenage = ['Savon', 'Éponge', 'Sac poubelle', 'Lessive', 'Nettoyant'];

  // UN SEUL RETURN - tout le JSX à l'intérieur
  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '30px',
      backgroundColor: '#ffffff',
      minHeight: '100vh'
    }}>
      {/* Section d'en-tête */}
      <div style={{
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '20px',
        borderRadius: '10px',
        marginBottom: '30px',
        textAlign: 'center'
      }}>
        <HelloWorld />
      </div>

      {/* Section des salutations */}
      <div style={{
        backgroundColor: '#f9f9f9',
        padding: '20px',
        borderRadius: '10px',
        marginBottom: '30px'
      }}>
        <h3 style={{ color: '#333', marginBottom: '15px' }}>👋 Salutations :</h3>
        <Greeting prenom="Elena" />
      </div>

      {/* Section du profil */}
      <div style={{
        backgroundColor: '#f9f9f9',
        padding: '20px',
        borderRadius: '10px',
        marginBottom: '30px'
      }}>
        <h3 style={{ color: '#333', marginBottom: '15px' }}>👤 Profil utilisateur :</h3>
        <div style={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <Profil utilisateur={utilisateur} taille={150} />
        </div>
      </div>

      {/* Section des véhicules (Exercice 1) */}
      <div style={{
        backgroundColor: '#f9f9f9',
        padding: '20px',
        borderRadius: '10px',
        marginBottom: '30px'
      }}>
        <h3 style={{ color: '#333', marginBottom: '15px' }}>🚗 Véhicules disponibles :</h3>
        <Vehicule marque="Toyota" modele="Corolla" annee={2022} carburant="Hybride" />
        <Vehicule marque="Renault" modele="Clio" annee={2023} carburant="Essence" />
        <Vehicule marque="Tesla" modele="Model 3" annee={2024} carburant="Électrique" />
      </div>

      {/* Section des listes de courses (Exercice 2) */}
      <div style={{
        backgroundColor: '#f9f9f9',
        padding: '20px',
        borderRadius: '10px'
      }}>
        <h3 style={{ color: '#333', marginBottom: '15px' }}>🛍️ Mes listes de courses</h3>
        
        {/* Première liste - Légumes */}
        <ListeCourses 
          elements={listeLegumes}
          titre="🥕 Légumes à acheter"
          couleur="#FF6B6B"
        />
        
        {/* Deuxième liste - Fruits */}
        <ListeCourses 
          elements={listeFruits}
          titre="🍎 Fruits à acheter"
          couleur="#4ECDC4"
        />
        
        {/* Troisième liste - Produits ménagers */}
        <ListeCourses 
          elements={listeMenage}
          titre="🧹 Produits ménagers"
          couleur="#FFD93D"
        />
      </div>

      {/* Pied de page */}
      <p style={{
        textAlign: 'center',
        marginTop: '40px',
        color: '#888',
        fontSize: '0.9rem'
      }}>
        TP React - Création de composants avec PropTypes
      </p>
    </div>
  );
}

export default App;