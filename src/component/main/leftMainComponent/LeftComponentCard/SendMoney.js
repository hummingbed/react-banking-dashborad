import mastercard from '../../../../Assets/images/Mastercard_logo.jpg'
const SendMoney = () => {
    return (
        <div className="my-2 ">
            <div className="font-sixteen px-1">Send Money</div>
            <div className="bg-light rounded py-2 px-2 shadow gap-5 d-flex">
                <div className='d-flex gap-2 fw-bold mt-3'>
                    <img src={mastercard} alt="mastercard" style={{ width: '20px', height: '14px' }} />
                    <p className='font-eight'>Debit</p>
                </div>
                <div className='col font-eleven gap mt-3 fw-bold text-end'>
                    <span className='text-muted'>$</span>
                    <span>10.680</span>
                    <a href='#sendmoney' class="text-decoration-none ms-3 text-dark float-end" aria-hidden="true">
                        <i class="fa fa-chevron-down" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SendMoney;