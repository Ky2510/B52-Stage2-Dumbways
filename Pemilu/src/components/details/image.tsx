import detailImage from "../../assets/kpu.png"

function ImageDetailContent() {
    return(
        <>
            <img src={detailImage} className="img-fluid p-4" width="100%" style={{height: "550px"}} alt="..."/>
        </>
    )
}

export default ImageDetailContent