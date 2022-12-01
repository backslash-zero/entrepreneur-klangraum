import SideTrunc1 from '../../../../assets/images/SideTrunc1.png'
import SideTrunc2 from '../../../../assets/images/SideTrunc2.png'
import SideTrunc3 from '../../../../assets/images/SideTrunc3.png'

interface SideTruncInterface {
	imgID : number
	rotation? : number
}

function SideTrunc({ imgID, rotation=0} : SideTruncInterface) {
	var img: string = ""

	switch (imgID) {
		case 1:
			img = SideTrunc1
			break;
		case 2:
			img = SideTrunc2
			break;
		case 3:
			img = SideTrunc3
			break;
		default:
			img = SideTrunc1
			break;
	}


	return ( 
		<div className="w-20 h-20" style={{transform: "rotate(" + rotation + "deg)"}}>
			<img className="w-full h-full object-contain"
				src={img}
				alt="treetrunc"
			></img>
		</div>
	 );
}

export default SideTrunc;