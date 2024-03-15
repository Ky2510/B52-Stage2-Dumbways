import { useEffect, useState } from 'react'
import axios from 'axios'
import imagePaslon from '../../../assets/imagePaslon.png'
import TypeDataPaslon from '../../../interface/dashboard'

function IndexPaslon() {
    const [paslons, setPaslon] = useState<TypeDataPaslon[]>([])

    const findPaslons = async ()=> {
        try {
          const response = await axios.get("http://localhost:3000/api/v1/paslons")
          const data = response.data
          setPaslon(data)

        } catch (error) {
          console.log(error)
        }
      }
      useEffect(() => {
        findPaslons()
    }, [])

    const deleteData = async (id:number) => {
        try {
            const response = await axios.delete(`http://localhost:3000/api/v1/paslon/delete/${id}`)
            const data = response.data
            setPaslon(data)
            console.log("success deleted")
            findPaslons()
        } catch (error) {
            console.log(error, "error data deleted")
        }

    }
    
    return (
        <>
            <div className="bg-white">
                <div className="row justify-content-center">
                    <div className="title text-center p-5 fs-1 fw-bold" style={{ color: "#5e5a00"}}>
                        LIST PASLON
                    </div>
                    <div className="col-lg-8">
                        <a href="add-paslon" className="btn btn-lg text-light" style={{backgroundColor: "#5e5a00"}}>Add Paslon</a>
                        <table className="table mt-3">
                            <thead className="table-secondary">
                                <tr className="text-center">
                                <th scope="col">No. Urut</th>
                                <th scope="col">Logo</th>
                                <th scope="col">Ketua Umum</th>
                                <th scope="col">Visi & Misi</th>
                                <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                            {paslons.map((paslon, index) => (
                                <tr key={index}>
                                    <th scope="row" className="text-center">{paslon.serial_number}</th>
                                    <td className="text-center"><img src={imagePaslon} style={{height: "100px"}} alt="" srcSet="" /></td>
                                    <td className="text-center">{paslon.name},</td>
                                    <td className="text-center">
                                        {paslon.vision_mission}
                                    </td>
                                    <td className="text-center">
                                        <a href="">Edit</a> | <button onClick={() => deleteData(paslon.id)}>Hapus</button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IndexPaslon