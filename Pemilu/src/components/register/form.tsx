function FormRegister() {
    return (
        <>
            <div className="row mx-5">
                <div className="form-group mb-3 ">
                    <label htmlFor="fullName" className="form-label fs-5 fw-bold">Fullname</label>
                    <input type="text" className="form-control border border-2 border-secondary" id="fullName" placeholder="Enter fullname..." />
                </div>
                <div className="form-group mb-3 ">
                    <label htmlFor="alamat" className="form-label fs-5 fw-bold">Address</label>
                    <input type="text" className="form-control border border-2 border-secondary" id="alamat"  placeholder="Enter address..." />
                </div>
                <div className="form-group mb-3 ">
                    <label htmlFor="jenisKelamin" className="form-label fs-5 fw-bold">Gender</label>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form-check">
                                <input className="form-check-input p-2 mt-2" type="radio" name="flexRadioDefault" id="male" />
                                <label className="form-check-label" htmlFor="male" />
                                    <span className="fs-5 fw-bold">Male</span>
                                <label />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-check">
                                <input className="form-check-input p-2 mt-2" type="radio" name="flexRadioDefault" id="female" />
                                <label className="form-check-label" htmlFor="female" />
                                    <span className="fs-5 fw-bold">Female</span>
                                <label />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group mb-3 ">
                    <label htmlFor="username" className="form-label fs-5 fw-bold">Username</label>
                    <input type="text" className="form-control border border-2 border-secondary" id="username" placeholder="Enter username..." />
                </div>
                <div className="form-group mb-3 ">
                    <label htmlFor="password" className="form-label fs-5 fw-bold">Password</label>
                    <input type="password" className="form-control border border-2 border-secondary" id="password" placeholder="Enter password..." />
                </div>
                <button className="btn btn-block rounded-3 fs-4 text-light fw-semibold mx-1" style={{backgroundColor: "#5e5a00"}}>Submit</button>
                <div className="text-center p-3 fst-italic fs-5 text-secondary">Sudah memiliki akun ? <a href="/login">Login</a></div>
            </div>
        </>
    )   
}

export default FormRegister