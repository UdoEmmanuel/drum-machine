import React from 'react';


const Drumpad = ( { drumPads1, playSound }) => {
                                                                                       
  return (
    <div id="pad-container">
        {drumPads1.map((drumPad) => (
            <div onClick={() => playSound(drumPad.text)} id={drumPad.keyCode} className='drum-pad'>
                {drumPad.text}
                <audio src={drumPad.src} id={drumPad.text} className='clip'></audio>
            </div>
        ))}
    </div>
  )
}

export default Drumpad