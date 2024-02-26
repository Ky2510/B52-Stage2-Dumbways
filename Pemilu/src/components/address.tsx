import Logo from "../assets/logoaddress.png"
function  Address() {
    return (
        <>
            <div className="card bg-dark ">
                <div className="card-body">
                    <div className="container d-flex gap-5">
                        <img src={Logo} alt="" />
                        <div className="d-flex align-items-center">
                            <div className="col-lg-7">
                                <div className="card-text text-light fw-bold fs-5">DUMBWAYS.ID</div>
                                <p style={{color: '#5f5f5f'}}>Jl. Elang IV, Sawah Lama, Kec. Ciputat, Kota Tangerang Selatan, Banten 15413</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Address