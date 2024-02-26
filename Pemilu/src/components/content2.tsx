import ImageContent2 from "../assets/kpu.png"
import TypeDataContent from "../interface/content"

function Content2(props: TypeDataContent) {
    return (
        <>
            <div className="col-lg-4">
                <a href="detail" className="text-decoration-none">
                    <div className="card mt-2">
                        <img src={ImageContent2} className="card-image-top" alt="" />
                        <div className="card-body">
                            <button className="btn btn-danger btn-lg">{props.date}</button>
                            <h3  className="fw-bold mt-3">{props.title}</h3>
                            <h5  className="fw-normal fs-3">{props.author}</h5>
                        </div>
                    </div>
                </a>
            </div>
        </>
    )
}

export default Content2