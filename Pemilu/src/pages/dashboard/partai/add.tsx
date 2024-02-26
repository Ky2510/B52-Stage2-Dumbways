import imagePaslon from '../../../assets/imagePaslon.png'

function AddPartai() {
    return (
        <>
             <div className="bg-white">
                <div className="title text-center p-5 fs-1 fw-bold" style={{ color: "#5e5a00"}}>
                    ADD PARTAI
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="row">
                            <div className="d-flex flex-row mb-3">
                                <div className="p-2">
                                    <img src={imagePaslon} className="img-fluid" style={{height: "548px", width: "700px"}} alt="" srcSet="" />
                                </div>
                                <div className="p-2">
                                    <div className="row mx-5">
                                    <div className="form-group mb-3 ">
                                        <label htmlFor="nama" className="form-label fs-4 fw-bold">Nama</label>
                                        <input type="text" className="form-control p-2 border border-2 border-secondary" id="nama" />
                                    </div>
                                    <div className="form-group mb-3 ">
                                        <label htmlFor="noUrut" className="form-label fs-4 fw-bold">Nomor Urut</label>
                                        <input type="text" className="form-control p-2 border border-2 border-secondary" id="noUrut" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="visiMisi" className="form-label fs-4 fw-bold">Visi & Misi</label>
                                        <div className="form-group mb-3 ">
                                            <div className="form-floating">
                                                <textarea className="form-control p-2 border border-2 border-secondary" name="visiMisi" placeholder="Leave a comment here" id="floatingTextarea" style={{height: "140px"}}></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="alamat" className="form-label fs-4 fw-bold">Alamat</label>
                                        <div className="form-group mb-3 ">
                                            <div className="form-floating">
                                                <textarea className="form-control p-2 border border-2 border-secondary" name="alamat" placeholder="Leave a comment here" id="floatingTextarea" style={{height: "140px"}}></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn rounded-3 fs-2 text-light fw-semibold mx-1" style={{backgroundColor: "#5e5a00"}}>Submit</button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddPartai