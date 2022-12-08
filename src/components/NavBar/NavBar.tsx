import { FiInfo, FiPauseCircle, FiPlayCircle, FiX } from 'react-icons/fi'
import RTLogo from '../../assets/svg/RTLogo'

interface NavBarProps {
	isMuted : boolean,
	setIsMuted: (status: boolean) => void,
	isPlaying: boolean,
	firstPage: boolean,

	infosCollapsed: boolean,
	SetInfosCollapsed: Function

}

function NavBar({ isMuted, setIsMuted, isPlaying, firstPage, infosCollapsed, SetInfosCollapsed } : NavBarProps) {
	
	return (
		
		<nav className="fixed top-0 w-full h-20 z-[80]
		p-4
		flex items-center justify-between
		bg-transparent
		text-fluorange-500
		border-b border-fluorange-500 border-1
		backdrop-blur
		">								
		<div className='font-display'>
			{
				firstPage &&
				<RTLogo />
			}
		</div>
		<div className='text-[40px] flex items-center gap-2'>
		{
			isPlaying &&
			<button className='w-10 h-10 flex items-center justify-center cursor-pointer' onClick={() => setIsMuted(!isMuted)}>
			{
				isMuted ?
				<FiPlayCircle strokeWidth={1}/>
				:
				<FiPauseCircle strokeWidth={1}/>
			}
			</button>
		}
			<div>
			{
				!infosCollapsed
				?
				<div className='w-10 h-10 flex items-center justify-center cursor-pointer'
						onClick={() => SetInfosCollapsed(true)}
				>
					<FiInfo  strokeWidth={1}/>
				</div>
				:
				<div className='w-10 h-10 flex items-center justify-center cursor-pointer'
						onClick={() => SetInfosCollapsed(false)}
				>
					<FiX  strokeWidth={1}/>
				</div>
			}
			</div>
		</div>
		</nav>
		);
	}
	
	export default NavBar;