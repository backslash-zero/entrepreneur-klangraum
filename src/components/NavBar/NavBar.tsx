import { FiInfo } from 'react-icons/fi'

interface NavBarProps {

}

function NavBar() {
	return (
		<div className="sticky top-0 w-full h-14
						p-4
						flex items-center justify-between
						bg-emerald-700
						text-white">
			<p className='font-display'>
				Der entrepreneur
			</p>
			<div className='text-2xl '>
				<FiInfo width={24} />
			</div>
		</div>
			);
}

export default NavBar;