import ImagePaslon from "../../assets/imagePaslon.png"

function IndexDashboard() {
    return (
        <>
            <div className="row d-flex flex-row bg-light">
                <div className="title mt-4 text-center fs-1 fw-bold p-4" style={{ color: "#5e5a00"}}>DASHBOARD</div>
                <div className="col-lg-4 d-flex justify-content-center align-items-center flex-column">
                    <div className="rounded-circle d-flex justify-content-center align-items-center shadow shadow" style={{backgroundColor:"#fcff63", height: "85px", width: "85px"}}>
                        <span className="fs-3 fw-bold" style={{color: "#5e5400",  textShadow: "2px 2px 2px white"}}>1</span>
                    </div>
                    <div className="p-2 mt-3">
                        <div className="card shadow shadow-lg" style={{ backgroundColor: "#fcff63", width: "350px"}}>
                            <img src={ImagePaslon} className="card-img-top p-3" style={{height: "15rem"}} alt="..."/>
                            <div className="card-body" style={{marginTop: "-18px"}}>
                                <h2 className="fw-bold" style={{color: "#5e5400",  textShadow: "2px 2px 2px white"}}>Jhon Doe</h2>
                                <div className="fs-4" style={{color: "#5e5400",  textShadow: "2px 2px 2px white"}}>Akumulasi : 25%</div>
                                <div className="fs-4" style={{color: "#5e5400",  textShadow: "2px 2px 2px white"}}>Jumlah Vote: 117 voters</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 d-flex justify-content-center align-items-center flex-column">
                    <div className="rounded-circle d-flex justify-content-center align-items-center shadow shadow" style={{backgroundColor:"#56fff5", height: "85px", width: "85px"}}>
                        <span className="fs-3 fw-bold" style={{color: "#00585e",  textShadow: "2px 2px 2px white"}}>2</span>
                    </div>
                    <div className="p-2 mt-3">
                        <div className="card shadow shadow-lg" style={{ backgroundColor: "#56fff5", width: "350px"}}>
                            <img src={ImagePaslon} className="card-img-top p-3" style={{height: "15rem"}} alt="..."/>
                            <div className="card-body" style={{marginTop: "-18px"}}>
                                <h2 className="fw-bold" style={{color: "#00585e",  textShadow: "2px 2px 2px white"}}>Franco Junggler</h2>
                                <div className="fs-4" style={{color: "#00585e",  textShadow: "2px 2px 2px white"}}>Akumulasi : 75%</div>
                                <div className="fs-4" style={{color: "#00585e",  textShadow: "2px 2px 2px white"}}>Jumlah Vote: 300 voters</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 d-flex justify-content-center align-items-center flex-column">
                    <div className="rounded-circle d-flex justify-content-center align-items-center shadow shadow" style={{backgroundColor:"#ff5656", height: "85px", width: "85px"}}>
                        <span className="fs-3 fw-bold" style={{color: "#5e0000",  textShadow: "2px 2px 2px white"}}>1</span>
                    </div>
                    <div className="p-2 mt-3">
                        <div className="card shadow shadow-lg" style={{ backgroundColor: "#ff5656", width: "350px"}}>
                            <img src={ImagePaslon} className="card-img-top p-3" style={{height: "15rem"}} alt="..."/>
                            <div className="card-body" style={{marginTop: "-18px"}}>
                                <h2 className="fw-bold" style={{color: "#5e0000",  textShadow: "2px 2px 2px white"}}>Nana Roaming</h2>
                                <div className="fs-4" style={{color: "#5e0000",  textShadow: "2px 2px 2px white"}}>Akumulasi : 35%</div>
                                <div className="fs-4" style={{color: "#5e0000",  textShadow: "2px 2px 2px white"}}>Jumlah Vote: 243 voters</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="title mt-4 text-center fs-1 fw-bold p-4" style={{ color: "#5e5a00"}}>LIST VOTER</div>
                <div className="col-lg-7">
                    <table className="table">
                        <thead className="table-secondary">
                            <tr>
                            <th scope="col">No</th>
                            <th scope="col">Nama</th>
                            <th scope="col">Alamat</th>
                            <th scope="col">Jenis Kelamin</th>
                            <th scope="col">Paslon</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Sugeng No Pants</td>
                                <td>Cileungsi</td>
                                <td>Laki - Laki</td>
                                <td>Jhon Doe</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Haris Gams</td>
                                <td>Serang</td>
                                <td>Perempuan</td>
                                <td>Nana Roaming</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Sugeng No Pants</td>
                                <td>Cileungsi</td>
                                <td>Laki - Laki</td>
                                <td>Franco Junggler</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="p-2">
                        <div className="fs-4 fw-bold">TOTAL SUARA TERKUMPUL: 1000 Voters</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IndexDashboard