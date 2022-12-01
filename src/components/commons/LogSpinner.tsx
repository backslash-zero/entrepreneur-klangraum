import Log30 from '../../assets/images/SideTrunc30.png'

function LogSpinner() {
	return ( 
		<div className='absolute bottom-4 right-4
						w-20 h-20
						animate-spin-slow'>
			<img
				className='w-full h-full object-contain'
				alt="rotating-log"
				src={Log30}>	
			</img>
		</div>
	 );
}

export default LogSpinner;