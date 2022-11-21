
interface PersonProps {
	position: string,
	name: string,
}

function Person({ position, name } : PersonProps) {
	return ( 
		<div>
			<h3 className="text-lg font-semibold">{ position }</h3>
			<p className="">{ name }</p>
		</div>
	 );
}

export default Person;