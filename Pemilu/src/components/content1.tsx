import Content2 from "./content2"
import ImageContent1 from "../assets/kpu.png"

function Content() {
    return (
        <>
           <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-8">
                        <div className="card text-bg-dark">
                            <img src={ImageContent1} className="img-fluid"  alt="" srcSet=""  />
                            <div className="card-img-overlay">
                                <div className="d-flex align-items-start flex-column mt-auto" style={{ height: '350px' }}>
                                    <button className="mt-auto p-2 btn btn-danger btn-lg mb-4">Senin, 03 JAN 2023</button>
                                    <h2  className="fw-bold">KPU TETAPKAN 3 MENTOR TERBAIK</h2>
                                    <h5  className="fw-light fs-3">Super Admin</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                      <Content2/>
                   </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-4">
                      <Content2/>
                    </div>
                    <div className="col-lg-4">
                      <Content2/>
                   </div>
                    <div className="col-lg-4">
                      <Content2/>
                   </div>
                </div>
            </div>
        </>
    )
}

export default Content