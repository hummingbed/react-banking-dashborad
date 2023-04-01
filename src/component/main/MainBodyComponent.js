import LeftMainComponent from "./leftMainComponent/LeftMainComponent";
const MainBodyComponent = () => {
    return (
        <div class="container-fluid px-4" >
            <div class="row">
                <div class="col-lg-2 col-md-12 px-2 border">
                    <LeftMainComponent/>
                </div>
                <div class="col-lg-10 col-md-12">
                    <div class="p-2 border bg-info">Custom column padding</div>
                </div>
            </div>
        </div>
    );
}

export default MainBodyComponent;