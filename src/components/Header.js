import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="star star1" />
        <div className="star star2" />
        <div className="star star3" />
        <div className="star star4" />
        <div className="star star5" />
        <div className="star star6" />
        <div className="star star7" />
        <div className="star star8" />
        <h1>Sistema Solar</h1>
        <div className="horizont">
          <div className="glow" />
        </div>
        <div className="shadow-planet">
          <a className="subtitle" href="#planets-container">
            <p>VAMOS EMBARCAR</p>
            <ion-icon name="chevron-down-outline" />
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
