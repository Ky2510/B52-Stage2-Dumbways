import imagePaslon from '../../../assets/imagePaslon.png'

function IndexPartai() {
    return (
        <>
            <div className="bg-white">
                <div className="row justify-content-center">
                    <div className="title text-center p-5 fs-1 fw-bold" style={{ color: "#5e5a00"}}>
                        LIST PARTAI
                    </div>
                    <div className="col-lg-8">
                        <table className="table">
                            <thead className="table-secondary">
                                <tr className="text-center">
                                <th scope="col">No. Urut</th>
                                <th scope="col">Logo</th>
                                <th scope="col">Ketua Umum</th>
                                <th scope="col">Visi & Misi</th>
                                <th scope="col">Alamat</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row" className="text-center">1</th>
                                    <td className="text-center"><img src={imagePaslon} style={{height: "100px"}} alt="" srcSet="" /></td>
                                    <td className="text-center">Miya Junggler</td>
                                    <td>
                                        <ul>
                                            Visi & Misi
                                            <li>Memindahkan Indonesia ke Isekai</li>
                                            <li>Nonton anime 3x sehari</li>
                                            <li>Melakukan peresapan pada budaya Jepang</li>
                                        </ul>
                                    </td>
                                    <td className="text-center">Kerajaan Black Clover</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IndexPartai