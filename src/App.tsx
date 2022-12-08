import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import * as Tone from 'tone'
import MainPageLoader from './components/commons/MainPageLoader';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import Infos from './pages/Infos';
import PageNotFound from './pages/PageNotFound';

function App() {

  // Weather the sound is playing or not.
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasExperienceBegan, setHasExperienceBegan] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [isVisibleHero, setIsVisibleHero] = useState(true)
  
  // Loaded finsihed
  // const [hasLoaded, setLoaded] = useState(false)

  const StartTone = async () => {
    // Start sound experience
    await Tone.start()
    setIsMuted(false)
    setIsPlaying(true)
    setHasExperienceBegan(true)
  }

  return (
    <React.Suspense fallback={<MainPageLoader/>}>
    <div className='h-full bg-soil-400'>
      <NavBar isMuted={isMuted} setIsMuted={setIsMuted} isPlaying={isPlaying} firstPage={isVisibleHero} />
        <Routes>
        <Route
          path='/'
          element={<Home
            StartTone={StartTone}
            isPlaying={isPlaying}
            isMute={isMuted}
            hasExperienceBegan={hasExperienceBegan}
            setHasExperienceBegan={setHasExperienceBegan}
            isVisibleHero={isVisibleHero}
            setIsVisibleHero={setIsVisibleHero}
          />}
        />
          <Route path='/infos' element={<Infos/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
      </div>
    </React.Suspense>
  );
}

export default App;
