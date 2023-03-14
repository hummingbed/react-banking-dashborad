import TopNav from "../nav/TopNav";
import './Maincoponent.css'
import TopMaincomponent from "./TopMainComponent/TopMainComponent";
import MiddleMainComponent from "./MiddleMainComponent/MiddleMainComponent";
const MainComponent = () => {
    return ( 
        <div>
            <TopNav/>
            <TopMaincomponent/>
            <MiddleMainComponent/>

        </div>
     );
}
 
export default MainComponent;