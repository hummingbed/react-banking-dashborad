import profileImg from '../../Assets/images/profile_img.png'
const TopNav = () => {
    return (
        <div >
            <nav class="navbar navbar-expand-lg bg-light py-2">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#ello">My Card</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">OpenPay</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#ello">
                                        <i class="fa fa-search" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#ello">
                                        <i class="fa fa-bell-o" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#ello">
                                        <img src={profileImg} alt='profile-img' />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>



        </div>
    );
}

export default TopNav;