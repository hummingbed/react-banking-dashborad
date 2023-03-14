import masterCardImg from '../../../../Assets/images/Mastercard_logo.jpg';
import cashAccImg from '../../../../Assets/images/Ellipse_351.png';
import usaFlag from '../../../../Assets/images/usa.png'

const TopLeftCardComponent = () => {
    return (

        <div className="col-md-4 pt-2 col-lg-3 text-white fw-bold" style={{ backgroundColor: '#FFFFFF' }}>
            <div className="px-4 rounded border top-main-card-color">
                <div>
                    <small className="font-eight">Name</small>
                    <p className="font-thirteen">Carla Rosser</p>
                </div>

                <div className="d-flex">
                    <div className="col-md-7 mt-2 font-ten">
                        <p>1200 01452 54215 <br /> 08/23</p>
                    </div>
                    <div className="col">
                        <p className="fs-5 text-end">Visa</p>

                    </div>
                </div>
            </div>

            <div className="px-3 py-2">
                <p className="text-dark">Send Money</p>
                <div className="row border py-2 shadow-lg rounded">
                    <div className="col">
                        <div className="d-flex gap-3">
                            <a class="nav-link" href="#ello">
                                <img src={masterCardImg} className='img-fluid ' alt='masterCardImg' style={{ width: '35px', height: '20px' }} />
                            </a>
                            <p className="font-ten text-dark mt-2">Debit</p>
                        </div>
                    </div>

                    <div className="col">
                        <div className="d-flex gap-3 text-end ">
                            <p className="font-ten text-dark mt-2  text-end col align-self-end">$10.680
                                <span type="button" className="text-muted dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"></span>
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="px-3 py-2">
                <div className="row shadow border py-2 rounded">
                    <div className="col-md-12">
                        <div className="d-flex gap-3">
                            <a class="nav-link" href="#ello">
                                <img src={cashAccImg} className='img-fluid ' alt='cashAccImg' />
                            </a>
                            <p className="font-ten text-muted mt-2">Enter the amount</p>
                        </div>
                    </div>


                    <div className="col-md-6 col-sm-6">
                        <div className="d-flex gap-3">
                            <input type='text' className="form-control font-twentyOne" value="$ 800.00" />
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-4">
                        <div className="d-flex gap-3 text-end ">
                            <p className="text-dark mt-2  text-end col align-self-end">
                                <a class="nav-link" href="#ello">
                                    <img src={usaFlag} className='img-fluid ' alt='usaFlag' />
                                    <img src={usaFlag} className='img-fluid ' alt='usaFlag' />
                                </a>
                            </p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default TopLeftCardComponent;