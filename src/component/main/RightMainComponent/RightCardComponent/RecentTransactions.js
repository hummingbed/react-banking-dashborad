import bitcoin from '../../../../Assets/images/bitcion.png'
import Ellipse_one from '../../../../Assets/images/Ellipse_one.png'
import paypal from '../../../../Assets/images/paypal.png'
const RecentTransactions = () => {
    return (
        <div class="row py-4">
            <div class="col">
                <div class="row px-4">
                    <div class="font-fourteen py-2">Recent Transactions</div>
                    <div class="col">
                        <div class="d-flex gap-3">
                            <img src={bitcoin} className="image-fluid d-none d-md-block" alt="bitcoin" />
                            <div class="font-ten mt-2">Bitcoin Transactions</div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="text-center font-ten mt-2">Jan 16, 2020</div>
                    </div>
                    <div class="col">
                        <div class="text-center font-ten mt-2">*****45242</div>
                    </div>
                    <div class="col">
                        <div class=" text-center font-ten mt-2">-$853.00</div>
                    </div>
                    <div class="col d-none d-md-block">
                        <div class="col-6 float-end">
                            <div class="font-ten mt-2 text-success success py-1 rounded-2 text-center">Sucess</div>
                        </div>
                    </div>
                </div>

                <div class="row p-4">
                    <div class="col">
                        <div class="d-flex gap-3">
                            <img src={Ellipse_one} className="image-fluid d-none d-md-block" alt="Ellipse_one" style={{width: '29.25px', height: '29.25px'}}/>
                            <div class="font-ten mt-2">Sent to anitonia</div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="text-center font-ten mt-2">Jan 16, 2020</div>
                    </div>
                    <div class="col">
                        <div class="text-center font-ten mt-2">*****45242</div>
                    </div>
                    <div class="col">
                        <div class=" text-center font-ten mt-2">-$853.00</div>
                    </div>
                    <div class="col d-none d-md-block">
                        <div class="col-6 float-end">
                            <div class="font-ten mt-2  danger py-1 rounded-2 text-center">Pending</div>
                        </div>
                    </div>
                </div>

                <div class="row px-4">
                    <div class="col">
                        <div class="d-flex gap-3">
                            <img src={paypal} className="image-fluid d-none d-md-block" alt="paypal" />
                            <div class="font-ten mt-2">Withdraw Paypal</div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="text-center font-ten mt-2">Jan 16, 2020</div>
                    </div>
                    <div class="col">
                        <div class="text-center font-ten mt-2">*****45242</div>
                    </div>
                    <div class="col">
                        <div class=" text-center font-ten mt-2">-$853.00</div>
                    </div>
                    <div class="col d-none d-md-block">
                        <div class="col-6 float-end">
                            <div class="font-ten mt-2 text-success success  py-1 rounded-2 text-center">Sucess</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default RecentTransactions;