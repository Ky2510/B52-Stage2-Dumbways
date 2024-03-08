import FormRegister from "../components/register/form"

function Register() {
    return (
        <>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="bg-light">
                        <div className="container">
                            <div className="title p-4 text-center fs-2 fw-bold" style={{ color: "#5e5a00"}}>REGISTER</div>
                            <FormRegister/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register