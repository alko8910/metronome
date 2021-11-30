import React, {useState, useEffect, useMemo} from 'react';
import './metronome.css'
import sound from '../sounds/sound.wav';

function Metronome() {
    const [bmp, setBMP] = useState('100');
    const [playing, setPlaying] = useState(false)

   useEffect(() => {
      let timerHandle = 0;

      if (playing) {
        const metSound = new Audio(sound);
        const interval = (60 / bmp) * 1000;
        timerHandle = setInterval(() => metSound.play(), interval);
      }

      return () => {
        if (timerHandle) {
          clearInterval(timerHandle);
        }
      }
    }, [bmp, playing]);

    const inputChange = (e) => setBMP(e.target.value)
    const onToggle = () => setPlaying(!playing);

     return (
        <div>
            <h1>Metronome</h1>
            <div>{bmp} BMP</div>
            <input 
              type='range'
              min='40'
              max='200'
              value={bmp}
              onChange={inputChange}
            />
            <div>
            <button onClick={onToggle}>{playing ? "Stop" : "Start"}</button>
            </div>
        </div>
    )
}

export default Metronome



