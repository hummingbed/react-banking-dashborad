
const NavContentComponent = () => {
    return (
        <div>
            <div className="col align-items-center py-4 font-eleven">
                <div className="nav-item px-5 " style={{ borderLeft: '4px solid #0177FD' }}>
                    <a className="nav-link px-2 py-2 border rounded active" aria-current="page" href="#dashboard" style={{ backgroundColor: '#E5F1FF' }}>
                        <div className="d-flex text-primary gap-3">
                            <i className="fa fa-home mt-1" aria-hidden="true"></i>
                            <span className="">Dashboard</span>
                        </div>
                    </a>
                </div>

                <div className="nav-item px-5 ">
                    <a className="nav-link px-2 py-2 my-4 rounded active" aria-current="page" href="#dashboard">
                        <div className="d-flex gap-3">
                            <i class="fa fa-file-text-o text- muted mt-1" aria-hidden="true"></i>
                            <span className="text-dark fw-bold">Invoices</span>
                        </div>
                    </a>

                    <a className="nav-link px-2 py-2 my-4 rounded active" aria-current="page" href="#dashboard">
                        <div className="d-flex gap-3">
                            <i className="text-muted fa fa-commenting-o mt-1" aria-hidden="true"></i>
                            <span className="text-dark fw-bold">Messages</span>
                        </div>
                    </a>

                    <a className="nav-link px-2 py-2 my-4 rounded active" aria-current="page" href="#dashboard">
                        <div className="d-flex gap-3">
                            <i className="text-muted fa fa-credit-card-alt mt-1" aria-hidden="true"></i>
                            <span className="text-dark fw-bold">My Wallets</span>
                        </div>
                    </a>

                    <a className="nav-link px-2 py-2 my-4 rounded active" aria-current="page" href="#dashboard">
                        <div className="d-flex gap-3">
                            <i class="fa fa-pie-chart text-muted mt-1" aria-hidden="true"></i>
                            <span className="text-dark fw-bold">Activity</span>
                        </div>
                    </a>

                    <a className="nav-link px-2 py-2 my-4 rounded active" aria-current="page" href="#dashboard">
                        <div className="d-flex gap-3">
                            <i className="text-muted fa fa-bar-chart mt-1" aria-hidden="true"></i>
                            <span className="text-dark fw-bold">Analytics</span>
                        </div>
                    </a>
                </div>

            </div>
        </div>
    );
}

export default NavContentComponent;