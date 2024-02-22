import { useState, useEffect } from "react"
import Navbar from "./components/navbar"
import Region from "./components/form/region"
import 'bootstrap/dist/css/bootstrap.min.css'

function Dropdown({}) {
  const [provinces, setProvinces] = useState([])
  const [regencies, setRegencies] = useState([])
  const [districts, setDistricts] = useState([])
  const [villages, setVillages] = useState([])
  
  const handleProvinceChange = async (event: any) => {
    const selectedProvince = event.target.value
    const response = await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${selectedProvince}.json`)
    const data = await response.json()
    setRegencies(data)
  }

  const handleRegencyChange = async (event: any) => {
    const selectedRegency = event.target.value
    const response = await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/districts/${selectedRegency}.json`)
    const data = await response.json()
    setDistricts(data)
  }

  const handleDistrictChange = async (event :any) => {
    const selectedDistrict = event.target.value
    const response = await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/villages/${selectedDistrict}.json`)
    const data = await response.json()
    setVillages(data)
  }

  useEffect(() => {
    const fetchProvinces = async () => {
      const response = await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json`)  
      const data = await response.json()
      setProvinces(data)
    }
    fetchProvinces()
  }, [])
  
  return (
    <>
      <Navbar/>
      <Region/>
      <div className="container">
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
            <div className="form-group mt-2">
              <label htmlFor="province" className="fw-bold">Province</label>
              <select className="form-select" aria-label="Default select example" onChange={handleProvinceChange}>
                <option>Select Province</option>
                {provinces.map((province : any, index) => (
                  <option key={index} value={province.id}>{province.name}</option>
                ))} 
              </select>
            </div>
            <div className="form-group mt-2">
              <label htmlFor="regency" className="fw-bold">Regency/City</label>
              <select className="form-select" aria-label="Default select example" onChange={handleRegencyChange}>
                  { regencies.map((regency : any, index) => (
                    <option key={index} value={regency.id}>{regency.name}</option>
                  ))}
              </select>
            </div>
            <div className="form-group mt-2">
              <label htmlFor="district" className="fw-bold">District</label>
              <select className="form-select" aria-label="Default select example" onChange={handleDistrictChange}>
                { districts.map((district : any, index) => (
                  <option key={index} value={district.id}>{district.name}</option>
                ))}
              </select>
            </div>
            <div className="form-group mt-2">
              <label htmlFor="villages" className="fw-bold">Villages</label>
              <select className="form-select" aria-label="Default select example">
                {villages.map((village : any, index) => (
                  <option key={index} value={village.id}>{village.name}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-lg-3"></div>
        </div>
      </div>
    </>
  )
}

export default Dropdown
