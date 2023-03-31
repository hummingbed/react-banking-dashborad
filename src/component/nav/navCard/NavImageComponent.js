import logo from '../../../Assets/icons/main-icon.png'

const NavImageComponent = () => {
    return (
        <div >
            <div className='col pt-5 px-5'>
                <a href='#home' className='d-flex gap-3 text-decoration-none'>
                    <p><img src={logo} alt='main-logo' className='img-fluid' /></p>
                    <p className='font-eleven mt-1 fw-bold text-dark'>OpenPay</p>
                </a>
            </div>
        </div>
    );
}

export default NavImageComponent;