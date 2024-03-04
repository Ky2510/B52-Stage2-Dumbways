import ImagePaslon from "../../assets/imagePaslon.png"

function VotingPaslon() {
    return (
        <>
        <button type="button" className="btn btn-lg rounded-3 mt-5 text-light fs-2 px-4 mb-5 fw-semibold" style={{backgroundColor: "#5e5a00"}} data-bs-toggle="modal"  data-bs-target="#exampleModal">Masukan Suaramu</button>
            <div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex flex-row mb-3 justify-content-center">
                                    <div className="p-2">
                                        <div className="card" style={{ backgroundColor: "#fcff63", width: "350px"}}>
                                            <img src={ImagePaslon} className="card-img-top p-3" style={{height: "15rem"}} alt="..."/>
                                            <div className="card-body" style={{marginTop: "-18px"}}>
                                                <h2 className="fw-bold" style={{color: "#005e4d",  textShadow: "2px 2px 2px white"}}>Jhon Doe</h2>
                                                <div className="card-text">Memindahkan Indonesia ke Isekai</div>
                                                <div className="fw-bold"> Partai Pengusung :</div>
                                                <ul>
                                                    <li>Partai persatuan monyet</li>
                                                    <li>Partai sapi merah Indonesia</li>
                                                    <li>Partai pisang masak</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-2">
                                        <div className="card" style={{ backgroundColor: "#e3e3e3",width: "350px"}}>
                                            <img src={ImagePaslon} className="card-img-top p-3" style={{height: "15rem"}} alt="..."/>
                                            <div className="card-body" style={{marginTop: "-18px"}}>
                                                <h2 className="fw-bold" style={{color: "#005e4d",  textShadow: "2px 2px 2px white"}}>Franco Junggler</h2>
                                                <div className="card-text">Memindahkan Indonesia ke Isekai</div>
                                                <div className="fw-bold"> Partai Pengusung :</div>
                                                <ul>
                                                    <li>Partai persatuan monyet</li>
                                                    <li>Partai sapi merah Indonesia</li>
                                                    <li>Partai pisang masak</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-2">
                                        <div className="card" style={{ backgroundColor: "#e3e3e3", width: "350px"}}>
                                            <img src={ImagePaslon} className="card-img-top p-3" style={{height: "15rem"}} alt="..."/>
                                            <div className="card-body" style={{marginTop: "-18px"}}>
                                                <h2 className="fw-bold" style={{color: "#005e4d",  textShadow: "2px 2px 2px white"}}>Nana Roaming</h2>
                                                <div className="card-text">Memindahkan Indonesia ke Isekai</div>
                                                <div className="fw-bold"> Partai Pengusung :</div>
                                                <ul>
                                                    <li>Partai persatuan monyet</li>
                                                    <li>Partai sapi merah Indonesia</li>
                                                    <li>Partai pisang masak</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-grid gap-2">
                                <div className="btn-group" role="group">
                                    <button className="btn btn-block rounded-3 fs-2 text-light fw-semibold border border-5"><span style={{ color: "#5e5a00", borderColor: "#5e5a00"}}>RESET</span></button>
                                    <button className="btn btn-block rounded-3 fs-2 text-light fw-semibold mx-1"   style={{backgroundColor: "#5e5a00"}}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VotingPaslon