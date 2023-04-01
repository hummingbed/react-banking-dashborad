
const VisaCard = () => {
    return (
        <div className="bg-primary border fw-bold text-light rounded" >
            <div className="mx-2">
                <div className="my-3 ">
                    <div className="font-eight ">Name</div>
                    <div className="font-thirteen">Carla Rosser</div>
                </div>

                <div className="row text-light">
                    <p className="col-sm-7 font-ten pt-1">1200 01452 54215
                        <br /> <span className="font-eight pt-1">08/23</span>
                    </p>
                    <p className="col fw-bolder font-sixteen text-end text-uppercase">Visa</p>
                </div>
            </div>

        </div>
    );
}

export default VisaCard;