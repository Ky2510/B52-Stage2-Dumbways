import VotingPaslon from "./votingPaslon"

function QuickCount() {
    return (
        <>
          <div className="container d-flex justify-content-center">
                <div className="col-lg-6">
                    <div className="card rounded-5">
                        <div className="card-body rounded-5" style={{backgroundColor: "#ff6384"}}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="card border border-light border-5" style={{backgroundColor: "#5e0000"}}>
                                            <div className="card-body">
                                                <div className="text-light fs-5 text-center fw-bold">No.</div>
                                                <div className="text-light fs-5 text-center fw-bold">Paslon</div>
                                                <h1 className="text-light text-center fw-bold">1</h1>
                                            </div>
                                        </div>  
                                    </div>
                                    <div className="col-lg-8 d-flex flex-row align-items-center">
                                        <div className="d-flex flex-column align-items-start">
                                            <h1 className="fw-bold" style={{color: "#5e0000",  textShadow: "2px 2px 2px white"}}>Nana Roaming</h1>
                                            <h1 className="fw-bold" style={{color: "#5e0000",  textShadow: "2px 2px 2px white"}}>45%</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mt-3 rounded-5">
                        <div className="card-body rounded-5" style={{backgroundColor: "#ffcd56"}}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="card border border-light border-5" style={{backgroundColor: "#5e5400"}}>
                                            <div className="card-body">
                                                <div className="text-light fs-5 text-center fw-bold">No.</div>
                                                <div className="text-light fs-5 text-center fw-bold">Paslon</div>
                                                <h1 className="text-light text-center fw-bold">2</h1>
                                            </div>
                                        </div>  
                                    </div>
                                    <div className="col-lg-8 d-flex flex-row align-items-center">
                                        <div className="d-flex flex-column align-items-start">
                                            <h1 className="fw-bold" style={{color: "#5e5400",  textShadow: "2px 2px 2px white"}}>Nana Roaming</h1>
                                            <h1 className="fw-bold" style={{color: "#5e5400",  textShadow: "2px 2px 2px white"}}>45%</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mt-3 rounded-5">
                        <div className="card-body rounded-5" style={{backgroundColor: "#36a2eb"}}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="card border border-light border-5" style={{backgroundColor: "#005e4d"}}>
                                            <div className="card-body">
                                                <div className="text-light fs-5 text-center fw-bold">No.</div>
                                                <div className="text-light fs-5 text-center fw-bold">Paslon</div>
                                                <h1 className="text-light text-center fw-bold">3</h1>
                                            </div>
                                        </div>  
                                    </div>
                                    <div className="col-lg-8 d-flex flex-row align-items-center">
                                        <div className="d-flex flex-column align-items-start">
                                            <h1 className="fw-bold" style={{color: "#005e4d",  textShadow: "2px 2px 2px white"}}>Franco Junggler</h1>
                                            <h1 className="fw-bold" style={{color: "#005e4d",  textShadow: "2px 2px 2px white"}}>25%</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <VotingPaslon/>
                </div>  
            </div>
        </>

    )
}

export default QuickCount