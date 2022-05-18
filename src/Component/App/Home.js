import React from 'react';
import Banner from './Banner';
import Questionnary from './Questionnary';

function Home() {

  return(
    <div id="welcome" className='wrap'>
      <Banner />

      <div id="welcome_banner">
        <h1>Bonjour et bienvenue sur notre simulateur de forme juridique</h1>
        <p>Découvrez toutes les formes juridiques blablabla...</p>
        
        <p>C’est parti !</p>
      </div>

      <Questionnary />

    </div>
  )
}

export default Home