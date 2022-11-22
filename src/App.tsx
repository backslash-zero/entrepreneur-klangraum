import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import * as Tone from 'tone'
import NavBar from './components/NavBar/NavBar';
import MainSounds from './components/ToneSounds/MainSounds';
import Home from './pages/Home';
import Infos from './pages/Infos';

function App() {

  // Weather the sound is playing or not.
  const [isPlaying, setIsPlaying] = useState(false)

  const StartTone = async () => {
    await Tone.start()
    setIsPlaying(true)
    console.log('Browser ready to play audio')
  }

  return (
    <div className='bg-forest-700'>
      <NavBar/>
      <MainSounds isPlaying={isPlaying} />
      <div className='w-full h-full'>
        <Routes >
          <Route path='/' element={<Home StartTone={StartTone} isPlaying={isPlaying} />}/>
          <Route path='/infos' element={<Infos/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
