import * as React from 'react'
import Logo from "../assets/logo.png"

function Navbar() {
    const [ inLogin, setInLogin ] =  React.useState<Boolean>(false)
    const loggedIn = () : void => {
      setInLogin(!inLogin)
    }
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-dark px-5" style={{ padding: '11px' }}>
            <div className="container-fluid">
                <a className="navbar-brand text-light fw-semibold fs-3" href="/"> <img src={Logo} width="50" alt="" /> PEMILU PRESIDEN DUMBWAYS.ID</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link text-light fs-4" aria-current="page" href="#">Partai</a>
                        </li>
                        <li className='nav-link text-light fs-4'>|</li>
                        <li className="nav-item">
                            <a className="nav-link text-light fs-4" href="#">Paslon</a>
                        </li>
                        <li className='nav-link text-light fs-4'>|</li>
                        <li className="nav-item">
                            <a className="nav-link text-light fs-4" href="/votes">Voting</a>
                        </li>
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
                                                    <a href="/dashboard" className="btn-light px-3 rounded-3 text-dark text-decoration-none">Dashboad</a>
                                                </li>
                                                <li>
                                                    <a className="btn-light px-3 rounded-3 text-dark text-decoration-none"
                                                    onClick={loggedIn}>Logout</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    : 
                                    <li className="nav-link">
                                        <a className="btn btn-light btn-md  px-3 rounded-3" onClick={loggedIn}>Login</a>
                                        <a href="/register"  className="btn btn-light mx-2 btn-md px-3 rounded-3">Register</a>
                                    </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar