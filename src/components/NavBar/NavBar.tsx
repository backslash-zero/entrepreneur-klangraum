import { useState } from 'react';
import { FiInfo, FiPauseCircle } from 'react-icons/fi'
import { Link, useResolvedPath } from 'react-router-dom';

interface NavBarProps {

}

function NavBar() {

	const [isCollapsed, setIsCollapsed] = useState(true)
	return (

			<nav className="sticky top-0 w-full h-20
								p-4
								flex items-center justify-between
								bg-transparent
								text-soil-100
								border-b border-soil-200 border-1
								backdrop-blur
								">								
				<p className='font-display'>
					Der entrepreneur
				</p>
				<div className='text-[40px] flex items-center gap-2'>
					<button className='w-10 h-10 flex items-center justify-center'>
						<FiPauseCircle strokeWidth={1}/>
					</button>
					<Link className='w-10 h-10 flex items-center justify-center' to="/infos" >
						<FiInfo  strokeWidth={1}/>
					</Link>
				</div>
			</nav>
		);
}

export default NavBar;