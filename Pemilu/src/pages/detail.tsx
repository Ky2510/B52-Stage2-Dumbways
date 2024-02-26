import TitleDetailContent from "../components/details/title"
import ImageDetailContent from "../components/details/image"
import DescriptionDetailContent from "../components/details/description"

function Detail() {
    return (
        <>
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="bg-light">
                        <div className="container">
                            <TitleDetailContent/>
                            <ImageDetailContent/>
                            <DescriptionDetailContent/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail