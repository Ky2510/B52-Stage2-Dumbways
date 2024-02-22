import ImageBrand from '../assets/brand1.png'
import ImageKotakSuara from '../assets/kotaksuara.png'
import ImageWellcome from '../assets/wellcometext.png'

function Header() {
    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="card rounded-5" style={{ height: '485px', background: 'linear-gradient(to left, #5c1e03, #65250e, #783628, #88463f)' }}>
                        <div class="d-flex justify-content-start"><img src={ImageBrand} alt="" /></div>
                        <div class="d-flex justify-content-start" style={{marginTop : '100px'}}><img src={ImageWellcome} alt="" /></div>
                        <div className="row">
                            <div className="col-lg-3"></div>
                            <div className="col-lg-3"></div>
                            <div className="col-lg-6" style={{marginTop: '-445px'}}>
                                <div class="d-flex justify-content-center"><img src={ImageKotakSuara} alt="" /></div>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
        </>
    )
}

export default Header