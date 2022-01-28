import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <SolarSystem />
          <Missions />
        </main>
        <footer><p>Desenvolvido por Thiago Nóbrega</p></footer>
      </>
    );
  }
}

export default App;
