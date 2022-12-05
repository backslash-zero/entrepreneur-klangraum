interface MainButtonProps {
	StartTone : () => {}
}

function MainButton( { StartTone } : MainButtonProps ) {
	return (
		<>
			<button className="	w-full h-11
								bg-fluorange-500 text-soil-200
								rounded-full"
				onClick={() => { StartTone() }}>Start</button>	
		</>);
}

export default MainButton;