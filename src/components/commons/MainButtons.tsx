interface MainButtonProps {
	StartTone : () => {}
}

function MainButton( { StartTone } : MainButtonProps ) {
	return (
		<>
			<button className="	w-40 h-8
								bg-fluorange-500 text-soil-200
								shadow-xl shadow-fluorange-500
								rounded-full"
				onClick={() => { StartTone() }}>Start</button>	
		</>);
}

export default MainButton;