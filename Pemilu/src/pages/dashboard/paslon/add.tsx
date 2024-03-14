import imagePaslon from '../../../assets/imagePaslon.png'
import TypeDataPaslon from '../../../interface/dashboard'

interface handleRegister {
    handle: (e: React.ChangeEvent<HTMLInputElement>) => void
    paslon: TypeDataPaslon
    handleSubmitPaslon: (event: React.FormEvent<HTMLFormElement>) => Promise<void>
}


function AddPaslon(props: handleRegister) {
    const handleSubmitPaslon  = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        props.handleSubmitPaslon(event)
    }

    return (
        <>
            <div className="bg-white">
                <div className="title text-center p-4 fs-1 fw-bold" style={{ color: "#5e5a00"}}>
                    ADD PASLON
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="row">
                            <form onSubmit={handleSubmitPaslon}>
                                <div className="d-flex flex-row mb-3">
                                    <div className="p-2">
                                        <img src={imagePaslon} className="img-fluid" style={{height: "548px", width: "700px"}} alt="" srcSet="" />
                                    </div>
                                    <div className="p-2">
                                        <div className="row mx-5">
                                            <div className="form-group mb-3 ">
                                                <label htmlFor="name" className="form-label fs-4 fw-bold">Nama</label>
                                                <input  type="text"
                                                        className="form-control border border-2 border-secondary" 
                                                        name="name"
                                                        id="name" 
                                                        onChange={props.handle} 
                                                />
                                            </div>
                                            <div className="form-group mb-3 ">
                                                <label htmlFor="serial_number" className="form-label fs-4 fw-bold">Nomor Urut</label>
                                                <input type="text"
                                                       className="form-control border border-2 border-secondary" 
                                                       name="serial_number"
                                                       id="serial_number" 
                                                       onChange={props.handle} 
                                                />
                                            </div>
                                            <div className="form-group mb-3">
                                                <label htmlFor="vision_mission" className="form-label fs-4 fw-bold">Visi & Misi</label>
                                                <div className="form-group mb-3 ">
                                                    <div className="form-floating">
                                                        <textarea 
                                                            className="form-control border border-2 border-secondary" 
                                                            name="vision_mission" 
                                                            id="vision_mission" 
                                                            style={{height: "200px"}}
                                                            onChange={props.handle}>
                                                        </textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="submit" className="btn rounded-3 fs-4 text-light fw-semibold mx-1" style={{backgroundColor: "#5e5a00"}}>Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddPaslon