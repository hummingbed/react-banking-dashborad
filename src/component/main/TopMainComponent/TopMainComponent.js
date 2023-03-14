import ChartComponent from "../charts/ChartComponent";
import TopCardComponent from "./sub_folder/TopCardComponent";
import TopLeftCardComponent from "./sub_folder/TopLeftCardComponent";


const TopMaincomponent = () => {
    return (
        <div className="container-fluid overflow-hidden mt-1">
            <div className="row gy-3 ">
                <TopLeftCardComponent/>
                
                <div className="col-md-5 overflow-auto col-lg-6">
                    <div className="p-3 rounded  align-self-center ">
                        <ChartComponent />
                    </div>
                </div>
                <div className="col-md-3 col-lg-3 ">
                    <TopCardComponent />

                </div>
            </div>
        </div>
    );
}

export default TopMaincomponent;