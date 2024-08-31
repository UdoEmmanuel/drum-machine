import React, { useEffect, useState } from 'react';
import './App.css';
import Library from './Components/Library';
import Drumpad from './Components/Drumpad';
import Display from './Components/Display';

function App() {
  const [activeKey, setactiveKey] = useState('Click a Pad or press a Key')
  useEffect(() => {
    document.addEventListener('keydown', (e) => {
    for (let i=0; i < drumPads1.length; i++) {
        if ((e.key.toUpperCase()) !== (drumPads1[i].text)) {
            console.log('');
        } else {
          playSound(e.key.toUpperCase());
          
        }
    }
      
    })
  }, []);
const drumPads1 = [ 
    { 
        keyCode: 81, 
        text: "Q", 
        src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" 
    }, 
    { 
        keyCode: 87, 
        text: "W", 
        src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" 
    }, 
    { 
        keyCode: 69, 
        text: "E", 
        src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" 
    }, 
    { 
        keyCode: 65, 
        text: "A", 
        src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" 
    }, 
    { 
        keyCode: 83, 
        text: "S", 
        src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" 
    }, 
    { 
        keyCode: 68, 
        text: "D", 
        src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" 
    }, 
    { 
        keyCode: 90, 
        text: "Z", 
        src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" 
    }, 
    { 
        keyCode: 88, 
        text: "X", 
        src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" 
    }, 
    { 
        keyCode: 67, 
        text: "C", 
        src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" 
    } 
]; 

function playSound(selector) {
    const audio = document.getElementById(selector);
    audio.play();
    setactiveKey(selector)
}
  return (
    <div id='container'>
      <div id="drum-machine">
        <Library />
        <Display activeKey={ activeKey }/>
        <Drumpad drumPads1={ drumPads1 } playSound={ playSound }/>
      </div>
    </div>
  );
}

export default App;
