import { useState } from 'react'
import reactLogo from './assets/react.svg'
import slash1 from './assets/sounds/slash1.wav'
import slash2 from './assets/sounds/slash2.wav'
import slash3 from './assets/sounds/slash3.wav'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [isActive, setActive] = useState(true);
  const [soundCounter, setSoundCounter] = useState(0);
  const sounds = [slash1, slash2, slash3];

  const toggleClass = () => {
    setActive(!isActive);
  };

  function play() {
    if (soundCounter === sounds.length) {
      setSoundCounter(0);
    } else {
      setSoundCounter(soundCounter + 1);
    }
    var audio = document.getElementById("audio");
    audio.play();
  }

  function handleClick(count) {
    setCount(count + 1);
    toggleClass();
    play();
  }

  return (
    <div className="App">
      <div className="card">
        <button className='spin' onClick={() => handleClick(count)}>
          <img src={reactLogo} className="logo anim" alt="React logo" />
        </button>
        <audio id="audio">
          <source type="audio/mpeg" src={sounds[soundCounter]} />
        </audio>
        <div>
          <p className={isActive ? 'zoom-in' : 'zoom-out'}>
            Score: {count}
          </p>
        </div>
      </div>
    </div >
  )
}

export default App
