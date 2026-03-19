// Véhicule.js
import PropTypes from 'prop-types';

function Véhicule({ marque, modele, annee, carburant }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '10px',
      margin: '10px 0',
      backgroundColor: '#f9f9f9'
    }}>
      <p>
        <strong>{marque} {modele}</strong> ({annee}) - {carburant}
      </p>
    </div>
  );
}

Véhicule.propTypes = {
  marque: PropTypes.string.isRequired,
  modele: PropTypes.string.isRequired,
  annee: PropTypes.number.isRequired,
  carburant: PropTypes.string.isRequired,
};

export default Véhicule;