import SideNav from './nav/SideNav.js'
import MainComponent from './main/MainComponent.js';
const IndexApp = () => {
    return (
        <div className="conainer-fluid" style={{ width: '98vw'}}>
            <div className="row">
                <div className="col-lg-2 col-md-2 col-sm-1 d-none d-lg-inline" style={{ height: '100vh', backgroundColor: '#FFFFFF' }}>
                    <SideNav />
                </div>
                <div className="col" style={{ height: '100vh', margin: 0, padding: 0 }}>
                    <MainComponent />
                </div>
            </div>
        </div>
    );
}

export default IndexApp;