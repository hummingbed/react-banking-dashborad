import mastercard from '../../../../Assets/images/Mastercard_logo.jpg'
import clothes from '../../../../Assets/images/clothes.svg'

const QuickTransfer = () => {
    return (
        <div className="my-2  border rounded">
            <div className="row rounded g-3 py-2 ">
                <p className="font-eleven  px-3">Quick Transfer</p>
                <div className="col-lg-12 col-md-4 px-3 font-ten">
                    <div className="row border rounded-3 g-2">
                        <div className="col-8">
                            <div className='d-flex gap-2 fw-bold mt-3'>
                                <img src={mastercard} alt="mastercard" style={{ width: '20px', height: '14px' }} />
                                <p className='font-eight'>Debit</p>
                            </div>
                        </div>
                        <div className="col-4 font-ten mt-4 text-end">
                            <p className='text-muted fw-bold'>$10,432</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-12 col-md-4 px-3">
                    <div className="row g-2 border border-2 px-1 border-primary rounded-3">
                        <div className="font-eleven text-muted fw-bold">Enter amount</div>
                        <div className="col">
                            <div className='fw-bold font-fourteen'>$1,24</div>
                        </div>
                        <div className="col text-end">
                            <img src={clothes} alt="clothes" className='rounded-circle' />
                            <img src={clothes} alt="clothes" className='rounded-circle' />
                        </div>
                    </div>
                </div>

                <div className="col-lg-12 col-md-4 px-3 pt-1">
                    <div className="row g-2">
                        <div className="col-3">
                            <i class="fa fa-upload border rounded-3 p-2" aria-hidden="true" style={{ color: '#A789FF' }}></i>
                        </div>
                        <div className="col-3">
                            <i class="fa fa-upload border rounded-3 p-2 text-success" aria-hidden="true"></i>
                        </div>
                        <div className="col-3">
                            <i class="fa fa-upload border rounded-3 p-2 text-warning" aria-hidden="true"></i>
                        </div>
                        <div className="col-3">
                            <i class="fa fa-upload border rounded-3 p-2 text-primary" aria-hidden="true" ></i>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default QuickTransfer;