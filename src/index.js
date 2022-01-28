import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

const planetLinkName = document.querySelectorAll('.planet-link-name');
const planetCardName = document.querySelectorAll('.planet-card');
console.log(planetLinkName)
planetLinkName.forEach(planet => {
  planet.addEventListener('click', (event) => {
    const planetName = event.target.innerText;
    planetLinkName.forEach(planet => {
      if(planet.classList.contains('active')) planet.classList.remove('active');
    })
    event.target.classList.add('active');
    planetCardName.forEach(planet => {
      if(planet.classList.contains('active')) planet.classList.remove('active');
      if(planet.classList.contains(planetName)) planet.classList.add('active');
    })
  })
})
