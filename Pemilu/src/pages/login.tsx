import * as React from "react"

interface handleAuth {
    handle: (e: React.ChangeEvent<HTMLInputElement>) => void
    login: (e: React.FormEvent<HTMLFormElement>) => void
}

function Login(props: handleAuth) {
    return (
        <>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="bg-light">
                        <div className="container">
                            <div className="title p-4 text-center fs-1 fw-bold" style={{ color: "#5e5a00"}}>Login</div>
                            <div className="row mx-5">
                                <form onSubmit={(e) => props.login(e)} >
                                    <div className="form-group mb-3 ">
                                        <label htmlFor="username" className="form-label fs-4 fw-bold">Username</label>
                                        <input type="text" className="form-control p-2 border border-2 border-secondary" name="username" id="username" onChange={props.handle} />
                                    </div>
                                    <div className="form-group mb-3 ">
                                        <label htmlFor="password" className="form-label fs-4 fw-bold">Password</label>
                                        <input type="password" className="form-control p-2 border border-2 border-secondary" name="password" id="password" onChange={props.handle} />
                                    </div>
                                    <button 
                                        type="submit"
                                        className="btn btn-block rounded-3 fs-2 text-light fw-semibold mx-1 my-4" 
                                        style={{backgroundColor: "#5e5a00"}}
                                    >
                                            Login
                                    </button>
                                </form>
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