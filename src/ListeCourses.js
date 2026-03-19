// ListeCourses.js
import PropTypes from 'prop-types';

function ListeCourses({ elements, titre, couleur }) {
  const styleConteneur = {
    border: `2px solid ${couleur || '#4CAF50'}`,
    borderRadius: '10px',
    padding: '15px',
    margin: '15px 0',
    backgroundColor: '#fefefe',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
  };

  const styleTitre = {
    color: couleur || '#4CAF50',
    marginTop: 0,
    borderBottom: `2px solid ${couleur || '#4CAF50'}`,
    paddingBottom: '8px'
  };

  const styleListe = {
    listStyleType: 'none',
    padding: 0
  };

  const styleElement = {
    padding: '10px',
    margin: '5px 0',
    backgroundColor: '#f9f9f9',
    borderRadius: '5px',
    borderLeft: `4px solid ${couleur || '#4CAF50'}`,
    transition: 'transform 0.2s'
  };

  return (
    <div style={styleConteneur}
         onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.01)'}
         onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
      
      {titre && <h3 style={styleTitre}>{titre}</h3>}
      
      <ul style={styleListe}>
        {elements.map((element, index) => (
          <li 
            key={index} 
            style={styleElement}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#e8f5e9'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#f9f9f9'}
          >
            <span style={{ marginRight: '10px' }}>🛒</span>
            {element}
          </li>
        ))}
      </ul>
      
      <p style={{ 
        textAlign: 'right', 
        fontSize: '0.8rem', 
        color: '#888',
        marginBottom: 0
      }}>
        Total: {elements.length} article{elements.length > 1 ? 's' : ''}
      </p>
    </div>
  );
}

ListeCourses.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.string).isRequired,
  titre: PropTypes.string,
  couleur: PropTypes.string
};

ListeCourses.defaultProps = {
  titre: 'Ma liste de courses',
  couleur: '#4CAF50'
};

export default ListeCourses;