import heystrids from '../../../Assets/images/heystrids.png'
import masterCardImg from '../../../Assets/images/Mastercard_logo.jpg'

import TransactionCard from './Middlecard/TransactionCard';
import iconOne from '../../../Assets/icons/iconOne.png'//
import iconTwo from '../../../Assets/icons/iconTwo.png'
import iconThree from '../../../Assets/icons/iconThree.png'
import iconFour from '../../../Assets/icons/iconFour.png'

const MiddleMainComponent = () => {
    return (
        <div>
            <div class="containerfluid px-3 " >
                <div class="row gx-4">
                    <div class="col-md-3">
                        <div class="pt-3 row px-1">
                            <div className='col'>
                                <div className='d-flex gap-3'>
                                    <p><img src={heystrids} alt="bitcoin" className="img-fluid" /></p>
                                    <p className='text-dark pt-1 fw-bold font-thirteen'>Astrid Hayes</p>
                                </div>
                            </div>
                            <div className='col font-eleven'>
                                <p className='text-end text-primary'>
                                    <i class="fa fa-plus p-2 rounded-circle" aria-hidden="true" style={{ background: '#DFF3FE' }}></i>
                                </p>
                            </div>
                        </div>
                        <div className='col border py-3 rounded text-center text-white bg-primary btn-lg'>
                            <a className='text-decoration-none font-eleven text-white' href='#btn'>Send Money</a>
                        </div>

                        <div className='col mt-1 border px-3 rounded'>
                            <a className='text-decoration-none  mt-2 font-eleven text-dark fw-bold' href='#btn'>Quick Transfer</a>

                            <div className='col mt-1 border rounded'>
                                <div className="row g-5">
                                    <div className="col ">
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

                            <div className='col mt-2 border rounded'>
                                <span className='font-ten fw-bold text-muted p-1'>Enter amount</span>
                                <div className="row g-5">
                                    <div className="col ">
                                        <div className="d-flex gap-3">
                                            <input type="" value="$1,24" className='form-control font-fourteen fw-bold' />
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

                            <div class="container my-2 text-center">
                                <div class="row row-cols-4 row-cols-lg-4 g-2 gx-lg-3">
                                    <div class="col">
                                        <div className='d-grid gap-1'>
                                            <a href='#send'>
                                                <i class="fa fa-upload border p-2 rounded" aria-hidden="true" style={{ color: '#A789FF' }}></i>
                                            </a>
                                            <small className='text-muted font-eight'>send</small>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div className='d-grid gap-1'>
                                            <a href='#send'>
                                                <i class="fa fa-upload border p-2 rounded" aria-hidden="true" style={{ color: '#83DEA4' }}></i>
                                            </a>
                                            <small className='text-muted font-eight'>Receive</small>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div className='d-grid gap-1'>
                                            <a href='#send'>
                                                <i class="fa fa-upload border text-warning p-2 rounded" aria-hidden="true"></i>
                                            </a>
                                            <small className='text-muted font-eight'>Invoicing</small>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div className='d-grid gap-1'>
                                            <a href='#send'>
                                                <i class="fa fa-th-large border text-primary p-2 rounded" aria-hidden="true"></i>
                                            </a>
                                            <small className='text-muted font-eight'>More</small>
                                        </div>
                                    </div>
                                    

                                </div>
                            </div>


                        </div>
                    </div>



                    <div class="col-md-9">
                        <div class="">
                            <div className="row">
                                <p className="col font-fourteen text-dark fw-bold" >Recent Transactions</p>
                                <p className="col text-muted text-end font-ten">View all &gt;</p>
                            </div>
                            <TransactionCard />
                            <div className="row  rounded py-3 shadow-lg ">
                                <p className="font-sixteen text-dark fw-bold" >Statistics</p>
                                <div className='col'>
                                    <div class="row mx-auto font-thirteen row-cols-2 row-cols-lg-4 g-2 g-lg-3">

                                        <div class="col">
                                            <div class="d-flex gap-3">
                                                <p><img src={iconOne} alt="bitcoin" className="img-fluid mt-1 py-2 px-1 rounded-circle" style={{ background: '#EFECFD' }} /></p>
                                                <p className='text-dark fw-bold font-thirteen'>220k <br /> <span className='font-ten text-muted'>customer</span> </p>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="d-flex gap-3">
                                                <p><img src={iconTwo} alt="bitcoin" className="img-fluid mt-1 py-2 px-2 rounded-circle" style={{ background: '#E4F8FB' }} /></p>
                                                <p className='text-dark fw-bold font-thirteen'>230k <br /> <span className='font-ten text-muted'>Remittance</span> </p>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="d-flex gap-3">
                                                <p><img src={iconThree} alt="IconThree" className="img-fluid mt-1 py-2 px-2 rounded-circle" style={{ background: '#E5F7ED' }} /></p>
                                                <p className='text-dark fw-bold font-thirteen'>270k <br /> <span className='font-ten text-muted'>Donation</span> </p>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="d-flex gap-3">
                                                <p><img src={iconFour} alt="IconThree" className="img-fluid mt-1 py-2 px-2 rounded-circle" style={{ background: '#FDF1E2' }} /></p>
                                                <p className='text-dark fw-bold font-thirteen'>130k <br /> <span className='font-ten text-muted'>Watchline</span> </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>


                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MiddleMainComponent;