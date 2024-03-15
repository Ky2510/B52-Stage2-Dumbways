    import { useEffect, useState } from "react"
    import TypeDataPaslon from "../interface/dashboard"
    import { ChangeEvent } from "react"
    import axios from "axios"

    const usePaslon = () => {
        const [paslon, setPaslon] = useState<TypeDataPaslon>({
            name: "",
            serial_number: "",
            vision_mission: ""
        })

        const handleSetPaslon = (event: ChangeEvent<HTMLInputElement>): void => {
            setPaslon({
                ...paslon,
                [event.target.name]: event.target.value
            })
        }

        const insertPaslon = async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault()
            try {
                const response = await fetch("http://localhost:3000/api/v1/paslon", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(paslon)
                })
                if (response.ok) {
                    const data = await response.json()
                    setPaslon(data.message)
                    console.log("insert paslon success")
                } else {
                    const errorData = await response.json()
                    setPaslon(errorData.error)
                }
            } catch (error) {
                console.error("Error insert paslon:", error)
            }
        }
        
        const [paslons, setPaslons] = useState<TypeDataPaslon[]>([])

        const findPaslons = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/v1/paslons")
                const data = response.data
                setPaslons(data)
            } catch (error) {
                console.log(error)
            }
        }
    
        const deleteData = async (id: number) => {
            try {
                const response = await axios.delete(`http://localhost:3000/api/v1/paslon/delete/${id}`)
                const data = response.data
                setPaslons(data)
                console.log("success deleted")
                findPaslons()
            } catch (error) {
                console.log(error, "error data deleted")
            }
        }
    
        useEffect(() => {
            findPaslons()
        }, [])
        return { paslon, handleSetPaslon, insertPaslon, paslons, deleteData }
    };

    export default usePaslon
