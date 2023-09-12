import './App.css';

import LogoVolcano from './medias/LogoVolcano.png'

import {React} from 'react';

function App() {
    return ( <div className="App fondMagma">
        <header className='headerHome'>
            <div className="titleGeneralTexte"> 
                <h1> LES <strong className="doubleEspace"> VOLCANOS </strong> 2024 </h1> 
            </div>
        </header>
        <main className="mainGeneral">
            <img src={LogoVolcano} alt="" />
            <h2> Site en Préparation... Sortie Lundi ! </h2>
        </main>
    </div>
  )
}

export default App;
