import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage, planetNumber, planetInfo } = this.props;
    let classNamePlanetCard = `planet-card ${planetName}`;
    if (planetName === 'Mercúrio') {
      classNamePlanetCard = `planet-card ${planetName} active`;
    }
    return (
      <div data-testid="planet-card" className={ classNamePlanetCard }>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
        <div className="planet-card-info">
          <div className="planet-number">
            <h4>{`0${planetNumber + 1}`}</h4>
          </div>
          <div className="planet-name">
            <p data-testid="planet-name">{planetName}</p>
          </div>
          <div className="planet-info">
            <p>{planetInfo}</p>
          </div>
        </div>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
  planetNumber: PropTypes.number.isRequired,
  planetInfo: PropTypes.string.isRequired,
};

export default PlanetCard;
