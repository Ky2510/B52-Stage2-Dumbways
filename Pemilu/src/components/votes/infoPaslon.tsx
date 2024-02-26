import ImagePaslon from "../../assets/imagePaslon.png"

function InfoPaslon() {
    return(
        <>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="row d-flex flex-row justify-content-center">
                        <div className="col-lg-9">
                            <div className="carousel-item active">
                                <div className="card">
                                    <div className="card-body p-5">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <img src={ImagePaslon} className="img-fluid" style={{height: "380px"}} alt="" srcSet="" />
                                            </div>
                                            <div className="col-lg-8">
                                                <p className="card-text fs-3 fw-bold">Nomor Urut : 1
                                                    <div className="card-title fs-1 fw-bold" style={{color: "#5e0000"}}>Jhon Doe</div>
                                                </p>
                                                <div className="fs-5 fw-normal">
                                                    Visi & Misi
                                                    <ul>
                                                        <li>Memindahkan Indonesia ke Isekai</li>
                                                        <li>Memindahkan Indonesia ke Isekai</li>
                                                        <li>Memindahkan Indonesia ke Isekai</li>
                                                    </ul>
                                                    Koalisi 
                                                    <ul>
                                                        <li>Memindahkan Indonesia ke Isekai</li>
                                                        <li>Memindahkan Indonesia ke Isekai</li>
                                                        <li>Memindahkan Indonesia ke Isekai</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <img src={ImagePaslon} className="img-fluid" style={{height: "380px"}} alt="" srcSet="" />
                                            </div>
                                            <div className="col-lg-8">
                                                <p className="card-text fs-3 fw-bold">Nomor Urut : 1
                                                    <div className="card-title fs-1 fw-bold" style={{color: "#5e0000"}}>Jhon Doe</div>
                                                </p>
                                                <div className="fs-5 fw-normal">
                                                    Visi & Misi
                                                    <ul>
                                                        <li>Memindahkan Indonesia ke Isekai</li>
                                                        <li>Memindahkan Indonesia ke Isekai</li>
                                                        <li>Memindahkan Indonesia ke Isekai</li>
                                                    </ul>
                                                    Koalisi 
                                                    <ul>
                                                        <li>Memindahkan Indonesia ke Isekai</li>
                                                        <li>Memindahkan Indonesia ke Isekai</li>
                                                        <li>Memindahkan Indonesia ke Isekai</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <img src={ImagePaslon} className="img-fluid" style={{height: "380px"}} alt="" srcSet="" />
                                            </div>
                                            <div className="col-lg-8">
                                                <p className="card-text fs-3 fw-bold">Nomor Urut : 1
                                                    <div className="card-title fs-1 fw-bold" style={{color: "#5e0000"}}>Jhon Doe</div>
                                                </p>
                                                <div className="fs-5 fw-normal">
                                                    Visi & Misi
                                                    <ul>
                                                        <li>Memindahkan Indonesia ke Isekai</li>
                                                        <li>Memindahkan Indonesia ke Isekai</li>
                                                        <li>Memindahkan Indonesia ke Isekai</li>
                                                    </ul>
                                                    Koalisi 
                                                    <ul>
                                                        <li>Memindahkan Indonesia ke Isekai</li>
                                                        <li>Memindahkan Indonesia ke Isekai</li>
                                                        <li>Memindahkan Indonesia ke Isekai</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon rounded-circle px-4 py-4 bg-dark" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon  rounded-circle px-4 py-4 bg-dark" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    ) 
}

export default InfoPaslon