import iconOne from '../../../../Assets/icons/iconOne.png'
import iconTwo from '../../../../Assets/icons/iconTwo.png'
import iconThree from '../../../../Assets/icons/iconThree.png'
import iconFour from '../../../../Assets/icons/iconFour.png'

const Statistics = () => {
    return (
        <div className="row px-4 bg-light shadow-lg g-4 mt-2 py-3 rounded">
            <div className="font-fourteen py-2 fw-bold">Statistics</div>
            <div className="col-3">
                <div className="d-flex gap-3">
                    <div className="col-2 rounded-5 py-1 text-center d-none d-md-block" style={{ background: '#EFECFD' }}>
                        <img src={iconOne} classNameName="image-fluid" alt="iconOne" />
                    </div>
                    <div className="d-grid ">
                        <div className="font-thirteen fw-bold">220k</div>
                        <div className="text-muted font-ten">customers</div>
                    </div>
                </div>
            </div>


            <div className="col-3">
                <div className="d-flex gap-3">
                    <div className="col-2 rounded-5 py-1 text-center d-none d-md-block" style={{ background: '#E4F8FB' }}>
                        <img src={iconTwo} classNameName="image-fluid" alt="iconTwo" />
                    </div>
                    <div className="d-grid ">
                        <div className="font-thirteen fw-bold">230k</div>
                        <div className="text-muted font-ten">Remittance</div>
                    </div>
                </div>
            </div>


            <div className="col-3">
                <div className="d-flex gap-3">
                    <div className="col-2 rounded-5 py-1 text-center success d-none d-md-block">
                        <img src={iconThree} classNameName="image-fluid" alt="iconThree" />
                    </div>
                    <div className="d-grid ">
                        <div className="font-thirteen fw-bold">230k</div>
                        <div className="text-muted font-ten">Remittance</div>
                    </div>
                </div>
            </div>

            <div className="col-3">
                <div className="d-flex gap-3">
                    <div className="col-2 rounded-5 py-1 text-center danger d-none d-md-block">
                        <img src={iconFour} classNameName="image-fluid" alt="iconFour" />
                    </div>
                    <div className="d-grid ">
                        <div className="font-thirteen fw-bold">130k</div>
                        <div className="text-muted font-ten">Watchtime</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Statistics;