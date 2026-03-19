
// Profil.js 
import PropTypes from 'prop-types';

function Profil({ utilisateur, taille }) {
  const styles = {
    container: {
      textAlign: 'center',
      margin: '20px',
      padding: '15px',
      backgroundColor: '#f5f5f5',
      borderRadius: '10px',
      display: 'inline-block'
    },
    imageContainer: {
      width: taille,
      height: taille,
      margin: '0 auto',
      borderRadius: '50%',          
      overflow: 'hidden',             
      border: '3px solid #4CAF50'
    },
    image: {
      width: '100%',                  // Prend toute la largeur du conteneur
      height: '100%',                 // Prend toute la hauteur du conteneur
      objectFit: 'cover',            
      display: 'block'
    },
    name: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      marginTop: '10px',
      color: '#333'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img 
          src={utilisateur.photo} 
          style={styles.image}
          alt={utilisateur.nom} 
        />
      </div>
      <p style={styles.name}>{utilisateur.nom}</p>
    </div>
  );
}

Profil.propTypes = {
  utilisateur: PropTypes.shape({
    nom: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired,
  taille: PropTypes.number,
};

Profil.defaultProps = {
  taille: 150,
};

export default Profil;