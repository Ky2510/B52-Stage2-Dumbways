import SideContent from "../components/sidecontent"
import QuickCount from "../components/votes/quickCount"
import InfoPaslon from "../components/votes/infoPaslon"
import Address from '../components/address'
import Footer from '../components/footer'

function Vote() {
    return (
        <>
            <div style={{backgroundColor: "white"}}>
                <h1 className="text-center fw-bold" style={{color: '#5e5400'}}> 
                   <p className="p-5">INFO PEMILU TERUPDATE</p>
                </h1>
                <div className="row">
                    <QuickCount/>
                </div>
            </div>
            <h1 className="text-center fw-bold" style={{color: '#5e5400'}}> 
                <p className="p-5">INFO PASLON  </p>
            </h1>
            <div className="row">
                <InfoPaslon/>
            </div>
            <SideContent/>
            <Address/>
            <Footer />
        </>
    )
}

export default Vote