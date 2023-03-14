import EllipseOne from '../../../../Assets/images/Ellipse_one.png'
import EllipseTwo from '../../../../Assets/images/Ellipse_two.png'
import EllipseThree from '../../../../Assets/images/Ellipse_three.png'
import EllipseFour from '../../../../Assets/images/Ellipse_four.png'
import Ellipsefive from '../../../../Assets/images/Ellipse_five.png'
import EllipseSix from '../../../../Assets/images/Ellipse_six.png'

const TopCardComponent = () => {
    return (
        <div>
            <div className="py-2 px-5 rounded">
                <div className="row ">
                    <div className="col-7">
                        <p className="fw-bold font-thirteen">Recent Contacts <br /> <span className="text-muted font-ten">18 recipients</span> </p>
                    </div>

                    <div className="col-5 px-3">
                        <div className="d-flex gap-3 float-end font-thirteen">
                            <i class="fa fa-pencil text-muted pe-auto" aria-hidden="true"></i>
                            <i class="fa fa-search text-primary pe-auto" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>

                <div className="row ">
                    <div className="d-flex gap-3">
                        <a class="nav-link" href="#ello">
                            <img src={EllipseOne} className='img-fluid' alt='Ellipse_one' />
                        </a>
                        <a class="nav-link" href="#ello">
                            <img src={EllipseTwo} className='img-fluid' alt='Ellipse_one' />
                        </a>
                        <a class="nav-link" href="#ello">
                            <img src={EllipseThree} className='img-fluid' alt='Ellipse_one' />
                        </a>
                        <a class="nav-link" href="#ello">
                            <img src={EllipseFour} className='img-fluid' alt='Ellipse_one' />
                        </a>
                        <a class="nav-link" href="#ello">
                            <img src={Ellipsefive} className='img-fluid' alt='Ellipse_one' />
                        </a>
                        <a class="nav-link" href="#ello">
                            <span>
                                <i class="fa fa-caret-right text-muted" aria-hidden="true"></i>
                            </span>
                        </a>
                    </div>
                </div>
            </div>




            <div className="py-2 px-5 rounded">
                <div className="border mt-lg rounded shadow-lg p-3 mb-5 bg-body p-2">
                    <div className="col-7">
                        <p className="text-muted font-eleven">Group <span className="text-dark">Party</span> </p>
                    </div>

                    <div className="row ">
                        <div className='col'>
                            <div className="d-flex ">
                                <a class="nav-link" href="#ello">
                                    <img src={EllipseOne} className='img-fluid offset-md-4' alt='Ellipse_one' />
                                </a>
                                <a class="nav-link" href="#ello">
                                    <img src={EllipseTwo} className='img-fluid offset-md-3' alt='Ellipse_one' />
                                </a>
                                <a class="nav-link" href="#ello">
                                    <img src={EllipseThree} className='img-fluid' alt='Ellipse_one' />
                                </a>


                            </div>
                        </div>
                        <div className='col'>
                            <div className="d-flex gap-3 float-end font-thirteen">
                                <i class="fa fa-comment-o text-muted mt-1" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-9">
                            <div className="d-flex gap-3">
                                <a class="nav-link" href="#ello">
                                    <img src={EllipseSix} className='img-fluid' alt='Ellipse_six' />
                                </a>
                                <p className="font-eleven">Dakota Milk
                                    <br /> <span className="text-muted font-ten">$ 420.00</span> </p>
                            </div>
                        </div>

                        <div className="col-3 px-3">
                            <div className="d-flex gap-3 float-end font-thirteen">
                                <a class="nav-link" href="#ello">
                                    <span>
                                        <i class="fa fa-caret-right text-muted" aria-hidden="true"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default TopCardComponent;