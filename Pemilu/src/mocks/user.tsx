import { ChangeEvent, useState } from "react"
import { TypeDataRegister } from "../interface/auth"

const useUser = () => {
    const [register, setRegister] = useState<TypeDataRegister>({
        fullname: "",
        username: "",
        password: "",
        address: "",
        gender: "",
        role: "user", 
      })
      
      const handleSetRegister = (event: ChangeEvent<HTMLInputElement>): void => {
        setRegister({
          ...register,
          [event.target.name]: event.target.value
        })
      }
      const insertUser = async (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault()
          try {
              const response = await fetch("http://localhost:3000/api/v1/user", {
                  method: "POST",
                  headers: {
                      "Content-Type": "application/json"
                  },
                  body: JSON.stringify(register)
              })
              if (response.ok) {
                  const data = await response.json()
                  setRegister(data.message)
                  console.log("insert user success")
              } else {
                  const errorData = await response.json()
                  setRegister(errorData.error)
              }
          } catch (error) {
              console.error("Error insert user:", error)
          }
      }

      return { register, handleSetRegister, insertUser }
}

export default useUser
