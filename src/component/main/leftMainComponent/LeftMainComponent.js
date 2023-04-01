import VisaCard from "./LeftComponentCard/VisaCard";
import SendMoney from "./LeftComponentCard/SendMoney";
import EnterTheAmount from "./LeftComponentCard/EnterTheAmount";
import HeyesSendMoney from "./LeftComponentCard/HeyesSendMoney";
import QuickTransfer from "./LeftComponentCard/QuickTransfer";

const LeftMainComponent = () => {
    return (
        <div className="row small-screen py-3">
            {/* <div className="mx-auto col-md-12"> */}
            <div className="col-md-3 col-lg-12 col-sm-10">
                <VisaCard />
            </div>
            <div className="col-md-3 col-lg-12 col-sm-10">
                <SendMoney />
            </div>
            <div className="col-md-3 col-lg-12 col-sm-10">
                <EnterTheAmount />
            </div>
            <div className="col-md-3 col-lg-12 col-sm-10">
                <HeyesSendMoney />
            </div>

            <div className="col-md-3 col-lg-12 col-sm-10">
                <QuickTransfer />
                <QuickTransfer />
            </div>





            {/* </div> */}
        </div>

    );
}

export default LeftMainComponent;