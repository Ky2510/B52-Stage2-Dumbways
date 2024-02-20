function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-secondary">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            <a className="nav-link fw-bold">Task 1 Stage 2 "Dropdown Items"</a>
                        </span>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar