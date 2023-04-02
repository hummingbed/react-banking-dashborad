import imgOne from '../../../../Assets/images/Ellipse_one.png';
import imgTwo from '../../../../Assets/images/Ellipse_two.png';
import imgThree from '../../../../Assets/images/Ellipse_three.png';
import imgFour from '../../../../Assets/images/Ellipse_four.png';
import imgFive from '../../../../Assets/images/Ellipse_five.png';
import GroupPartyOne from '../../../../Assets/images/GroupParty/EllipseG1.png';
import GroupPartyTwo from '../../../../Assets/images/GroupParty/EllipseG2.png';
import GroupPartyThree from '../../../../Assets/images/GroupParty/EllipseG3.png';
import Dakota from '../../../../Assets/images/GroupParty/Dakota.svg';

const RecentContact = () => {
    return (
        <div className="row py-3 gy-4">
            <div className="row gy-2">
                <div className="col-7 fw-bold font-thirteen">Recent Contacts</div>
                <div className="col text-end font-thirteen">
                    <i class="fa fa-pencil me-1 text-muted" aria-hidden="true"></i>
                    <i class="fa fa-search ms-1 text-primary" aria-hidden="true"></i>
                </div>
                <div className="col-12 fw-bold font-ten text-muted">18 recipients</div>
            </div>

            <div className="col-12 fw-bold mb-3 font-ten text-muted ">
                <div className="row">
                    <div className="col-2">
                        <img src={imgOne} className="image-fluid" alt="imgOne" />
                    </div>
                    <div className="col-2">
                        <img src={imgTwo} className="image-fluid" alt="imgTwo" />
                    </div>
                    <div className="col-2">
                        <img src={imgThree} className="image-fluid" alt="imgThree" />
                    </div>
                    <div className="col-2">
                        <img src={imgFour} className="image-fluid" alt="imgFour" />
                    </div>
                    <div className="col-2">
                        <img src={imgFive} className="image-fluid" alt="imgFive" />
                    </div>
                    <a href='#next' className="col-2 text-decoration-none">
                        <i class="fa fa-chevron-right mt-2 text-end text-muted" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
            <div className="col-12 pt-2">
                <div className="row g-2 rounded bg-light shadow-lg p-2">
                    <div className="col-12 font-eleven">
                        <span className='text-muted'>Group </span> Party
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-4">
                                <div className="d-flex mt-2">
                                    <img src={GroupPartyOne} className="image-fluid" alt="GroupPartyOne" />
                                    <img src={GroupPartyTwo} className="image-fluid" alt="GroupPartyTwo" />
                                    <img src={GroupPartyThree} className="image-fluid" alt="GroupPartyThree" />
                                </div>
                            </div>
                            <div className="col">
                                <div className='row'>
                                    <div className="border font-ten col-3 py-2 ms-3 text-center rounded-5 text-primary">+5</div>
                                    <i class="fa fa-comment-o text-muted mt-2 col text-end" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 pt-3">
                        <div className="row">
                            <div className="col-3">
                                <img src={Dakota} className="image-fluid" alt="GroupPartyThree" />
                            </div>
                            <div className="col-7">
                                <div className="font-eleven">Dakota Milk</div>
                                <div className="text-muted font-ten">$ 420.00</div>
                            </div>
                            <div className="col-2">
                                <i class="font-eleven fa fa-chevron-right" aria-hidden="true"></i>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default RecentContact;