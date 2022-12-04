import SideTrunc1 from '../../../../assets/images/SideTrunc1.png'
import SideTrunc2 from '../../../../assets/images/SideTrunc2.png'
import SideTrunc3 from '../../../../assets/images/SideTrunc3.png'
import Graffiti1 from '../../../../assets/svg/graffitis/Graffiti1'
import Graffiti2 from '../../../../assets/svg/graffitis/Graffiti2'
import Graffiti3 from '../../../../assets/svg/graffitis/Graffiti3'
import Graffiti4 from '../../../../assets/svg/graffitis/Graffiti4'
import Graffiti5 from '../../../../assets/svg/graffitis/Graffiti5'
import Graffiti6 from '../../../../assets/svg/graffitis/Graffiti6'
import Graffiti7 from '../../../../assets/svg/graffitis/Graffiti7'
import Graffiti8 from '../../../../assets/svg/graffitis/Graffiti8'
import Graffiti9 from '../../../../assets/svg/graffitis/Graffiti9'
import Graffiti10 from '../../../../assets/svg/graffitis/Graffiti10'

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
	
	var numberGraffiti
	switch (id) {
		case 1:
			numberGraffiti = <Graffiti1/>
			break;
		case 2:
			numberGraffiti = <Graffiti2/>
			break;
		case 3:
			numberGraffiti = <Graffiti3/>
			break;
		case 4:
			numberGraffiti = <Graffiti4/>
			break;
		case 5:
			numberGraffiti = <Graffiti5/>
			break;
		case 6:
			numberGraffiti = <Graffiti6/>
			break;
		case 7:
			numberGraffiti = <Graffiti7/>
			break;
		case 8:
			numberGraffiti = <Graffiti8/>
			break;
		case 9:
			numberGraffiti = <Graffiti9/>
			break;
		case 10:
			numberGraffiti = <Graffiti10/>
			break;
		default:
			numberGraffiti = <Graffiti10/>
			break;
	}


	return ( 
		<div className="relative w-20 h-20" >
			<div className="absolute w-full h-full object-contain z-10 p-6 blur-xs"
					style={{strokeWidth: 10, strokeLinejoin: 'round'}}>
				{ numberGraffiti }
			</div>
			<img className="w-full h-full object-contain"
				src={img}
				alt="treetrunc"
				style={{transform: "rotate(" + rotation + "deg) scale(" + size +")" }}
			></img>
		</div>
	 );
}

export default SideTrunc;