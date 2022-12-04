import { useEffect, useState } from 'react';
import { FiInfo, FiPauseCircle, FiPlayCircle, FiX } from 'react-icons/fi'
import { Link, useMatch, useParams, useResolvedPath } from 'react-router-dom';
import ScrollToTop from '../utils/ScrollToTop';
import RTLogo from '../../assets/svg/RTLogo'

interface NavBarProps {
	isMuted : boolean,
	setIsMuted: (status: boolean) => void,
	isPlaying: boolean,
	firstPage: boolean
}

function NavBar({ isMuted, setIsMuted, isPlaying, firstPage } : NavBarProps) {
	
	const resolvedPath = useResolvedPath("/infos")
	const isInfosActive = useMatch({ path: resolvedPath.pathname, end: true })

	return (
		
		<nav className="fixed top-0 w-full h-20 z-20
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
			<button className='w-10 h-10 flex items-center justify-center' onClick={() => setIsMuted(!isMuted)}>
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
				!isInfosActive
				?
				<Link className='w-10 h-10 flex items-center justify-center' to="/infos" >
				<FiInfo  strokeWidth={1}/>
				</Link>
				:
				<Link className='w-10 h-10 flex items-center justify-center' to="/">
				<FiX  strokeWidth={1}/>
				</Link>
			}
			</div>
		</div>
		</nav>
		);
	}
	
	export default NavBar;