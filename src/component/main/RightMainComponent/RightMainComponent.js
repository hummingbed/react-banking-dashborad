import ChartComponent from "./charts/ChartComponent";
import RecentContact from "./RightCardComponent/RecentContact";
import RecentTransactions from "./RightCardComponent/RecentTransactions";
const RightMainComponent = () => {
    return (
        <div className="row ">
            <div className="col-lg-12 ">
                <div className="row px-3">
                    <div className="col-md-9 col-sm-10 overflow-auto ">
                        <ChartComponent />
                    </div>
                    <div className="col-md-3 col-sm-11">
                        <RecentContact />
                    </div>
                </div>
            </div>
            <div className="col">
                <RecentTransactions />
            </div>

        </div>
    );
}

export default RightMainComponent;