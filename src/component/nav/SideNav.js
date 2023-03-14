import MainComponent from '../main/MainComponent.js'
import NavContentComponent from './NavContentComponent.js';
import logo from '../../Assets/icons/main-icon.png'

const SideNav = () => {
    return (
        <div >
            <div className="conainer-fluid" style={{ width: '99vw', }}>
                <div className="row">
                    <div className="col-lg-2 col-md-2 col-sm-1 d-none d-lg-inline" style={{ height: '100vh', backgroundColor: '#FFFFFF' }}>
                        <div >
                            <div className='col pt-5 px-5'>
                                <a href='#home' className='d-flex gap-3 text-decoration-none'>
                                    <p><img src={logo} alt='main-logo' className='img-fluid' /></p>
                                    <p className='font-eleven mt-1 fw-bold text-dark'>OpenPay</p>
                                </a>
                            </div>
                            <NavContentComponent />

                        </div>
                    </div>
                    <div className="col" style={{ height: '100vh', margin: 0, padding: 0 }}>
                        <MainComponent />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideNav;