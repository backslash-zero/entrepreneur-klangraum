import React, { useState } from 'react';
import * as Tone from 'tone'
import ScreenFrame from './components/ScreenFrame';

function App() {

  // Weather the sound is playing or not.
  const [isPlaying, setIsPlaying] = useState(false)

  const [isVisibleFirst, setIsVisibleFirst] = useState(false)
  const [isVisibleSecond, setIsVisibleSecond] = useState(false)
  const [isVisibleThird, setIsVisibleThird] = useState(false)

  const StartTone = async () => {
    await Tone.start()
    setIsPlaying(true)
    console.log('audio is ready')
  }



  return (
    <div>
      <div className='w-screen h-full snap-y snap-mandatory snap-always scroll-smooth bg-red-900 '  >
        <div className='sticky top-0 w-full z-50'>
          <p>isVisibleFirst: {isVisibleFirst ? "true": "false"}</p>
          <p>isVisibleSecond: {isVisibleSecond ? "true": "false"}</p>
          <p>isVisibleThird: {isVisibleThird ? "true": "false"}</p>
        </div>
        <ScreenFrame setVisible={setIsVisibleFirst}>
          <p>First</p>
          <button onClick={() => { StartTone() }}>Start</button>
        </ScreenFrame>
        <ScreenFrame setVisible={setIsVisibleSecond}>
          <p>Second</p>
        </ScreenFrame>
        <ScreenFrame setVisible={setIsVisibleThird}>
          <p>Third</p>
        </ScreenFrame>
      </div>
    </div>
  );
}

export default App;
