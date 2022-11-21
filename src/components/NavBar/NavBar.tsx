import { useState } from 'react';
import { FiInfo } from 'react-icons/fi'
import { Link, useResolvedPath } from 'react-router-dom';

interface NavBarProps {

}

function NavBar() {

	const [isCollapsed, setIsCollapsed] = useState(true)
	return (

			<nav className="sticky top-0 w-full h-14
								p-4
								flex items-center justify-between
								bg-emerald-700
								text-white">
				<p className='font-display'>
					Der entrepreneur
				</p>
				<div className='text-2xl '>
				
					<Link to="/infos" >
						<FiInfo width={24} />
					</Link>
				</div>
			</nav>
		);
}

export default NavBar;