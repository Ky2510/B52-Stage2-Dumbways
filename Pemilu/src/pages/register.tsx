import * as React from "react"
import { useState } from "react"
import { TypeDataRegister } from "../interface/auth"

interface handleRegister {
    handle: (e: React.ChangeEvent<HTMLInputElement>) => void
    register: TypeDataRegister
    handleSubmitUser: (event: React.FormEvent<HTMLFormElement>) => Promise<void>
}

function Register(props: handleRegister) {
    const [gender, setGender] = useState("")
    
    const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGender(event.target.value)
        props.handle(event)
    }

    const handleSubmitUser  = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        props.handleSubmitUser(event)
    }
    return (
        <>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="bg-light">
                        <div className="container">
                            <div className="title p-4 text-center fs-2 fw-bold" style={{ color: "#5e5a00"}}>REGISTER</div>
                            <div className="row mx-5">
                                <form onSubmit={handleSubmitUser} >
                                    <div className="form-group mb-3 ">
                                        <label htmlFor="fullName" className="form-label fs-5 fw-bold">Fullname</label>
                                        <input  type="text"
                                                name="fullname" 
                                                onChange={props.handle}
                                                className="form-control border border-2 border-secondary" 
                                                id="fullName" 
                                                placeholder="Enter fullname..." />
                                    </div>
                                    <div className="form-group mb-3 ">
                                        <label htmlFor="address" className="form-label fs-5 fw-bold">Address</label>
                                        <input type="text" 
                                                name="address" 
                                                onChange={props.handle}
                                                className="form-control border border-2 border-secondary" 
                                                id="address"  
                                                placeholder="Enter address..." />
                                    </div>
                                    <div className="form-group mb-3 ">
                                        <label htmlFor="gender" className="form-label fs-5 fw-bold">Gender</label>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-check">
                                                    <input 
                                                        className="form-check-input p-2 mt-2" 
                                                        type="radio" 
                                                        name="gender" 
                                                        id="male"
                                                        value="Male"
                                                        checked={gender === "Male"}
                                                        onChange={handleGenderChange} />
                                                    <label className="form-check-label" htmlFor="male" />
                                                        <span className="fs-5 fw-bold">Male</span>
                                                    <label />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-check">
                                                    <input 
                                                        className="form-check-input p-2 mt-2" 
                                                        type="radio" 
                                                        name="gender" 
                                                        id="female"
                                                        value="Female"
                                                        checked={gender  === "Female"}
                                                        onChange={handleGenderChange} />
                                                    <label className="form-check-label" htmlFor="female" />
                                                        <span className="fs-5 fw-bold">Female</span>
                                                    <label />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group mb-3 ">
                                        <label htmlFor="username" className="form-label fs-5 fw-bold">Username</label>
                                        <input type="text"
                                                name="username"
                                                onChange={props.handle}
                                                className="form-control border border-2 border-secondary"
                                                id="username" 
                                                placeholder="Enter username..." />
                                    </div>
                                    <div className="form-group mb-3 ">
                                        <label htmlFor="password" className="form-label fs-5 fw-bold">Password</label>
                                        <input type="password" 
                                                name="password"
                                                onChange={props.handle}
                                                className="form-control border border-2 border-secondary" 
                                                id="password" 
                                                placeholder="Enter password..." />
                                    </div>
                                    <button type="submit" className="btn btn-block rounded-3 fs-4 text-light fw-semibold mx-1" style={{backgroundColor: "#5e5a00"}}>Submit</button>
                                </form>
                                <div className="text-center p-3 fst-italic fs-5 text-secondary">Sudah memiliki akun ? <a href="/login">Login</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register