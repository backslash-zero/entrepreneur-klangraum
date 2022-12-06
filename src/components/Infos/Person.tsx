
interface PersonProps {
	position: string,
	name: string,
	link?: string,
}

function Person({ position, name, link } : PersonProps) {
	return ( 
		<div>
			<h3 className="font-display text-xl ">{position}</h3>
			{
				link
				?
					<a href={link} className="">{name}</a>
				:
				<p className="">{name}</p>

			}
		</div>
	 );
}

export default Person;