import React from 'react';
import PropTypes from 'prop-types';
import '../InformationComponent.css';


const InformationComponent = ({ title, informations }) => {
  console.log(title, informations); // Para verificação
  return (
    <div>
      <h2 className="info-title">{title}</h2>
      <div className='div2'>
        <ul className="info-list">
          {informations.map((info, index) => (
            <li key={index} className="info-item">
              <a href={info.link} className="info-link">{info.text}</a>
            </li>
          ))}
        </ul>
      </div>
      
    </div>
  );
};

InformationComponent.propTypes = {
  title: PropTypes.string.isRequired,
  informations: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  })).isRequired
};

export default InformationComponent;