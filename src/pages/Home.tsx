import { useState } from "react";
import ScreenFrame from "../components/ScreenFrame";
import FrameSounds from "../components/ToneSounds/FrameSounds";

interface HomeProps {
	isPlaying : boolean
	StartTone : () => {}
}

function Home({ StartTone, isPlaying } : HomeProps) {
	const [isVisibleFirst, setIsVisibleFirst] = useState(false)
  	const [isVisibleSecond, setIsVisibleSecond] = useState(false)
  	const [isVisibleThird, setIsVisibleThird] = useState(false)
	
	return (
	
		<div className='w-screen h-full snap-y snap-mandatory snap-always scroll-smooth 
						bg-forest-700 text-soil-200 '>
			<FrameSounds
							isPlaying={isPlaying}
							isVisibleFirst={isVisibleFirst}
							isVisibleSecond={isVisibleSecond}
							isVisibleThird={isVisibleThird}
			
			/>	
		<div className='sticky top-40 left-0 w-full z-50'>
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
    </div>);
}

export default Home;