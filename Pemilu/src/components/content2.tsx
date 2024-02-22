import ImageContent2 from "../assets/kpu.png"

function Content2() {
    return (
        <>
            <div className="card">
                <img src={ImageContent2} className="card-image-top" alt="" />
                <div className="card-body">
                    <button className="btn btn-danger btn-lg">Senin, 03 JAN 2023</button>
                    <h3  className="fw-bold mt-3">KPU TETAPKAN 3 MENTOR TERBAIK</h3>
                    <h5  className="fw-normal fs-3">Super Admin</h5>
                </div>
            </div>
        </>
    )
}

export default Content2