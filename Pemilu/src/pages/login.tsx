import * as React from "react"

function Login() {
    const [ inLogin, setInLogin ] =  React.useState<Boolean>(false)
    const loggedIn = () : void => {
      setInLogin(!inLogin)
    }
    return (
        <>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="bg-light">
                        <div className="container">
                            <div className="title p-4 text-center fs-1 fw-bold" style={{ color: "#5e5a00"}}>Login</div>
                            <div className="row mx-5">
                                <div className="form-group mb-3 ">
                                    <label htmlFor="username" className="form-label fs-4 fw-bold">Username</label>
                                    <input type="text" className="form-control p-2 border border-2 border-secondary" id="username" />
                                </div>
                                <div className="form-group mb-3 ">
                                    <label htmlFor="password" className="form-label fs-4 fw-bold">Password</label>
                                    <input type="password" className="form-control p-2 border border-2 border-secondary" id="password" />
                                </div>
                                {
                                    inLogin ?
                                            <li className="nav-link">
                                                <div className="dropdown">
                                                    <button className="rounded-circle bg-light dropdown-toggle fs-4" data-bs-toggle="dropdown"
                                                            aria-expanded="false">
                                                        R 
                                                    </button>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a className="btn-light px-3 rounded-3 text-dark text-decoration-none"
                                                            onClick={loggedIn}>Logout</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            : 
                                            <a href="/" className="btn btn-block rounded-3 fs-2 text-light fw-semibold mx-1 my-4" onClick={loggedIn} style={{backgroundColor: "#5e5a00"}}>Submit</a>
                                    }
                                <div className="text-center p-4 fst-italic fs-4 text-secondary">Belum memiliki akun ? <a href="/register">Register</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login