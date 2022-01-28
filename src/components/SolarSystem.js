import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import PlanetLinks from './PlanetLinks';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" id="planets-container">
        <Title headline="Planetas" icon="planet-outline" />
        <div className="planet-wrapper">
          {planets.map((planet, index) => (
            <PlanetCard
              key={ planet.name }
              planetName={ planet.name }
              planetImage={ planet.image }
              planetNumber={ index }
              planetInfo={ planet.info }
            />
          ))}
        </div>
        <div className="planet-link">
          {planets.map((planet) => (
            <PlanetLinks
              key={ planet.name }
              planetLinkName={ planet.name }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
