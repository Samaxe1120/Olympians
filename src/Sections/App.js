 import React, { Component } from 'react';
import {Zeus, Poseidon, Hades, Aphrodite, Artemis} from './olympians'
import {gods} from './gods.js'
import './App.css';
import thunder from './ThunderSound effect.mp3'
import 'animate.css'



class App extends Component {

  
    // JavaScript to be fired on all pages, after page specific JS is fired
  
  

  render() {
    
      return (
        <div className="App">
        <h1 ref = 'heading' id = 'title' 
        className="App-title animated fadeIn">Welcome to the archive of the Gods</h1>
                <Zeus/>
               <Poseidon/>
               <Hades/>
               <Aphrodite/>
               <Artemis/>
           
                  
      </div>
      );
      
    
  
    }  
  

  
}

export default App;


