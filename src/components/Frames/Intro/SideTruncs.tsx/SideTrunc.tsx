import SideTrunc1 from '../../../../assets/images/SideTrunc1.png'
import SideTrunc2 from '../../../../assets/images/SideTrunc2.png'
import SideTrunc3 from '../../../../assets/images/SideTrunc3.png'

interface SideTruncInterface {
	id : number 
	imgID : number
	rotation? : number
}

function SideTrunc({id , imgID, rotation=0} : SideTruncInterface) {
	var img: string = ""
	var size: number = 100
	switch (imgID) {
		case 1:
			img = SideTrunc1
			size = 0.89
			break;
		case 2:
			img = SideTrunc2
			size = 1
			break;
		case 3:
			img = SideTrunc3
			size = 0.92
			break;
		default:
			img = SideTrunc1
			size = 0.78
			break;
	}


	return ( 
		<div className="relative w-20 h-20" >
			<img className="w-full h-full object-contain"
				src={img}
				alt="treetrunc"
				style={{transform: "rotate(" + rotation + "deg) scale(" + size +")" }}
			></img>
		</div>
	 );
}

export default SideTrunc;