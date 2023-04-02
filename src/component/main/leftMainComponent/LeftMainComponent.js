import VisaCard from "./LeftComponentCard/VisaCard";
import SendMoney from "./LeftComponentCard/SendMoney";
import EnterTheAmount from "./LeftComponentCard/EnterTheAmount";
import HeyesSendMoney from "./LeftComponentCard/HeyesSendMoney";
import QuickTransfer from "./LeftComponentCard/QuickTransfer";

const LeftMainComponent = () => {
    return (
        <div className="row small-screen py-1">
            <div className="col-md-4 col-lg-12 col-sm-10">
                <VisaCard />
            </div>
            <div className="col-md-4 col-lg-12 col-sm-10">
                <SendMoney />
            </div>
            <div className="col-md-4 col-lg-12 col-sm-10">
                <EnterTheAmount />
            </div>
            <div className="col-md-4 col-lg-12 col-sm-10">
                <HeyesSendMoney />
            </div>

            <div className="col-md-8 col-lg-12 col-sm-10">
                <QuickTransfer />
            </div>
        </div>
    );
}

export default LeftMainComponent;