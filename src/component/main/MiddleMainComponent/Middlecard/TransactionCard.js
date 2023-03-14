import bitcoin from '../../../../Assets/images/bitcion.png'
import paypal from '../../../../Assets/images/paypal.png'

const TransactionCard = () => {
    return (
        <div class="row row-cols-5 row-cols-lg-5 g-2 g-lg-3 font-ten">
            <div class="col">
                <div class="d-flex gap-3">
                    <p><img src={bitcoin} alt="bitcoin" className="img-fluid" /></p>
                    <p className='mt-2'>Bitcoin Transactions</p>
                </div>
            </div>
            <div class="col">
                <div class="mt-2 text-center">Jan 16, 2020</div>
            </div>
            <div class="col">
                <div class="mt-2 text-center">*****45242</div>
            </div>
            <div class="col">
                <div class="mt-2 text-center">-$853.00</div>
            </div>
            <div class="col">
                <div className='row'>
                    <div class=" text-success text-end me-3 rounded col align-self-end col-4 mx-auto" style={{ background: '#EBFFF3' }}>Sucess</div>
                </div>
            </div>

            <div class="col">
                <div class="d-flex gap-3">
                    <p><img src={paypal} alt="bitcoin" className="img-fluid" /></p>
                    <p className='mt-2'>Bitcoin Transactions</p>
                </div>
            </div>
            <div class="col">
                <div class="mt-2 text-center">Jan 16, 2020</div>
            </div>
            <div class="col">
                <div class="mt-2 text-center">*****45242</div>
            </div>
            <div class="col">
                <div class="mt-2 text-center">-$853.00</div>
            </div>
            <div class="col">
                <div className='row'>
                    <div class=" text-success text-end me-3 rounded col align-self-end col-4 mx-auto" style={{ background: '#EBFFF3' }}>Sucess</div>
                </div>
            </div>

            <div class="col">
                <div class="d-flex gap-3">
                    <p><img src={bitcoin} alt="bitcoin" className="img-fluid" /></p>
                    <p className='mt-2'>Bitcoin Transactions</p>
                </div>
            </div>
            <div class="col">
                <div class="mt-2 text-center">Jan 16, 2020</div>
            </div>
            <div class="col">
                <div class="mt-2 text-center">*****45242</div>
            </div>
            <div class="col">
                <div class="mt-2 text-center">-$853.00</div>
            </div>
            <div class="col">
                <div className='row'>
                    <div class=" text-success text-end me-3 rounded col align-self-end col-4 mx-auto" style={{ background: '#EBFFF3' }}>Sucess</div>
                </div>
            </div>
        </div>
    );
}

export default TransactionCard;