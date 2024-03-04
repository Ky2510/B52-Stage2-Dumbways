import TitleDetailContent from "../pages/user/detail/title"
import ImageDetailContent from "../pages/user/detail/image"
import DescriptionDetailContent from "../pages/user/detail/description"
import Address from '../components/address'
import Footer from '../components/footer'

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
            <Address />
            <Footer />
        </>
    )
}

export default Detail