import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { headline, icon } = this.props;
    return (
      <div className="planet-title">
        <ion-icon name={ icon } />
        <h2>{headline}</h2>
      </div>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Title;
