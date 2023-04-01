import heystidsImage from '../../../../Assets/images/heystrids.png'
const HeyesSendMoney = () => {
    return (
        <div className="my-2 ">
            <div className="bg-light rounded py-2 px-2 gap-0 d-grid">
                <div className='row fw-bold mt-1'>
                    <div className='col-9'>
                        <div className='d-flex gap-1 fw-bold mt-1'>
                            <img src={heystidsImage} alt="heystidsImage" className='image-fluid' style={{ width: '14px', height: '14px' }} />
                            <p className='font-eleven'>Astrid Hayes</p>
                        </div>
                    </div>
                    <i class="fa fa-plus-circle font-seventeen col-3 text-end text-primary" aria-hidden="true"></i>
                </div>
                <button type="button" class="rounded-4 font-eleven fw-bold py-3 btn btn-primary">Send Money</button>
            </div>
        </div>
    );
}

export default HeyesSendMoney;