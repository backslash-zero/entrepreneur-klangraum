import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import * as Tone from 'tone'
import NavBar from './components/NavBar/NavBar';
import MainSounds from './components/ToneSounds/MainSounds';
import Home from './pages/Home';
import Infos from './pages/Infos';

function App() {

  // Weather the sound is playing or not.
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  const StartTone = async () => {
    // Start sound experience
    await Tone.start()
    setIsPlaying(true)

    // Scroll to first content
    console.log('Browser ready to play audio')
  }

  return (
    <div className='bg-soil-400'>
      <MainSounds isPlaying={isPlaying} isMuted={isMuted} />
      <NavBar isMuted={isMuted} setIsMuted={setIsMuted} isPlaying={isPlaying} />
        <Routes>
          <Route path='/' element={<Home StartTone={StartTone} isPlaying={isPlaying} />} />
          <Route path='/infos' element={<Infos/>}/>
        </Routes>
    </div>
  );
}

export default App;
