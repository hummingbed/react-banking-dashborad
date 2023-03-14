import profileImg from '../../Assets/images/profile_img.png'
import NavContentComponent from './NavContentComponent';
import logo from '../../Assets/icons/main-icon.png'
const TopNav = () => {
    return (
        <div >
            <nav class="navbar navbar-expand-lg py-2">
                <div class="container-fluid">
                    <a class="navbar-brand font-seventeen fw-bolder" href="#ello">My Card</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            
                            <div className='col  p-2'>
                                <a href='#home' className='d-flex gap-3 text-decoration-none'>
                                    <p><img src={logo} alt='main-logo' className='img-fluid' /></p>
                                    <p className='font-eleven mt-1 fw-bold text-dark'>OpenPay</p>
                                </a>
                            </div>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body d-lg-inline d-md-none d-sm-none ">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 ">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#ello">
                                        <i class="fa fa-search text-muted" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#ello">
                                        <i class="fa fa-bell-o text-muted" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#ello">
                                        <img src={profileImg} alt='profile-img' className='rounded-circle' />
                                    </a>
                                </li>
                            </ul>
                            
                        </div>
                        <div class="offcanvas-body d-md-inline d-lg-none ">
                                <NavContentComponent />
                            </div>
                    </div>
                </div>
            </nav>



        </div>
    );
}

export default TopNav;