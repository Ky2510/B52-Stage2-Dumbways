function FormRegister() {
    return (
        <>
            <div className="row mx-5">
                <div className="form-group mb-3 ">
                    <label htmlFor="fullName" className="form-label fs-4 fw-bold">Fullname</label>
                    <input type="text" className="form-control p-2 border border-2 border-secondary" id="fullName" />
                </div>
                <div className="form-group mb-3 ">
                    <label htmlFor="alamat" className="form-label fs-4 fw-bold">Alamat</label>
                    <input type="text" className="form-control p-2 border border-2 border-secondary" id="alamat" />
                </div>
                <div className="form-group mb-3 ">
                    <label htmlFor="jenisKelamin" className="form-label fs-4 fw-bold">Jenis Kelamin</label>
                    <input type="text" className="form-control p-2 border border-2 border-secondary" id="jenisKelamin" />
                </div>
                <div className="form-group mb-3 ">
                    <label htmlFor="username" className="form-label fs-4 fw-bold">Username</label>
                    <input type="text" className="form-control p-2 border border-2 border-secondary" id="username" />
                </div>
                <div className="form-group mb-3 ">
                    <label htmlFor="password" className="form-label fs-4 fw-bold">Password</label>
                    <input type="password" className="form-control p-2 border border-2 border-secondary" id="password" />
                </div>
                <button className="btn btn-block rounded-3 fs-2 text-light fw-semibold mx-1" style={{backgroundColor: "#5e5a00"}}>Submit</button>
                <div className="text-center p-4 fst-italic fs-4 text-secondary">Sudah memiliki akun ? <a href="/login">Login</a></div>
            </div>
        </>
    )   
}

export default FormRegister