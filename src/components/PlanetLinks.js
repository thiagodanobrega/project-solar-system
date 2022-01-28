import React from 'react';
import PropTypes from 'prop-types';

class PlanetLinks extends React.Component {
  render() {
    const { planetLinkName } = this.props;
    if (planetLinkName === 'Mercúrio') {
      return (
        <p data-testid="planet-link-name" className="planet-link-name active">
          {planetLinkName}
        </p>
      );
    }
    return (
      <p data-testid="planet-link-name" className="planet-link-name">
        {planetLinkName}
      </p>
    );
  }
}

PlanetLinks.propTypes = {
  planetLinkName: PropTypes.string.isRequired,
};

export default PlanetLinks;
