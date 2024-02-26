import Content2 from "./content2"
import ImageContent1 from "../assets/kpu.png"
import { useState } from "react"
import { QueryContent } from "../mocks/content.json"
import TypeDataContent from "../interface/content"

function Content() {
    const [content, setContent] = useState<TypeDataContent[]>(QueryContent)
    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-8">
                        <div className="card text-bg-dark mt-4">
                            <img src={ImageContent1} className="img-fluid" alt="" srcSet=""  />
                            <div className="card-img-overlay">
                                <div className="d-flex align-items-start flex-column mt-auto" style={{ height: '330px' }}>
                                    <button className="mt-auto p-2 btn btn-danger btn-lg mb-4">{content[0].date}</button>
                                    <h2  className="fw-bold">{content[0].title}</h2>
                                    <h5  className="fw-light fs-3">{content[0].author }</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    {content.slice(1).map((data: TypeDataContent, index: number) => (
                        <Content2
                            key={index}
                            date={data.date}
                            title={data.title}
                            author={data.author}
                        />
                    ))}
                </div>
            </div>
        </>
        
    )
}

export default Content