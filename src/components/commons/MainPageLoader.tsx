import Div100vh from "react-div-100vh";
import RTLogo from "../../assets/svg/RTLogo";

function MainPageLoader() {

	
	return ( 
		<Div100vh className="w-full relative p-8 bg-forest-700 flex flex-col items-center justify-center gap-4">
			<p className="text-soil-500 text-xs font-mono">Loading...</p>
			<div className="absolute bottom-8">
				<RTLogo/>
			</div>
		</Div100vh>
	 );
}

export default MainPageLoader;