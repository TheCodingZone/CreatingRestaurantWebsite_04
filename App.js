import React,{ Fragment } from 'react';
import './App.css';
import Header from './Componant/LAYOUT/Header';
import Description from './Componant/LAYOUT/Description';
import Meal from './Componant/MEALS/Meal'

function App() {
  return (
    <Fragment className="App">
     <Header/>
     <Description/>
     <main>
     <Meal/>
     </main>
     

    </Fragment>
  );
}

export default App;
