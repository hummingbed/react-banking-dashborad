import MainComponent from '../main/MainComponent.js'

const SideNav = () => {
    return (
        <div >
            <div className="conainer-fluid" style={{ width: '99vw', }}>
                <div className="row">
                    <div className="col-lg-2 col-md-2 col-sm-1 d-none d-lg-inline" style={{ height: '100vh', backgroundColor: '#FFFFFF' }}>
                        <div >
                            <ul className="nav flex-column align-items-center py-4 fs-5">
                                <li className="nav-item px-3">
                                    <a className="nav-link px-2 py-2 border rounded  active" aria-current="page" href="#dashboard" style={{ backgroundColor: '#E5F1FF' }}>
                                        <i className="fa fa-home" aria-hidden="true"></i>
                                        <span className="ms-1 text-primary">Dashboard</span>
                                    </a>
                                </li>
                                <li className="nav-item pt-4 px-3">
                                    <a className="nav-link px-2 py-2" aria-current="page" href="#messages">
                                        <i class="fa fa-commenting-o" aria-hidden="true"></i>
                                        <span className="ms-1 text-primary">Messages</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#hello">Invoices</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#hello">Link</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col" style={{ height: '100vh',  margin: 0, padding: 0 }}>
                        <MainComponent />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideNav;