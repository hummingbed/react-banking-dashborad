import LeftMainComponent from "./leftMainComponent/LeftMainComponent";
import RightMainComponent from "./RightMainComponent/RightMainComponent";

const MainBodyComponent = () => {
    return (
        <div class="container-fluid px-4" >
            <div class="row">
                <div class="col-lg-2 col-md-12 px-2 border">
                    <LeftMainComponent />
                </div>
                <div class="col-lg-10 col-md-12 px-4 border">
                    <RightMainComponent />
                </div>
            </div>
        </div>
    );
}

export default MainBodyComponent;