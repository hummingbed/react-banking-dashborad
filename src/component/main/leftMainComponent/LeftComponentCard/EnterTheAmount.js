import EnterTheAmountPhoto from '../../../../Assets/images/Ellipse_351.png'
import usaIcon from '../../../../Assets/icons/usa.png'
import franceIcon from '../../../../Assets/icons/france.png'

const EnterTheAmount = () => {
    const amount = "$ 800.00";
    return (
        <div className="my-2 ">
            <div className="bg-light rounded py-2 px-2 shadow gap-0 d-grid">
                <div className='d-flex gap-1 fw-bold mt-1'>
                    <img src={EnterTheAmountPhoto} alt="EnterTheAmountPhoto" className='image-fluid' style={{ width: '14px', height: '14px' }} />
                    <p className='font-eleven'>Enter the amount</p>
                </div>

                <div className='d-flex gap-2'>
                    <div className='col-8'>
                        <input type="email" class="form-control font-twentyOne" placeholder={amount} />
                    </div>
                    <div className='col-4 text-end px-1 mt-2'>
                        <img src={usaIcon} alt="usaIcon" className='col-6 image-fluid' style={{ width: '15px', height: '15px' }} />
                        <img src={franceIcon} alt="franceIcon" className='col-6 image-fluid' style={{ width: '15px', height: '15px' }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EnterTheAmount;