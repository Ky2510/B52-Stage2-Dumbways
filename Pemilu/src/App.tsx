import { Route, Routes, useNavigate } from "react-router-dom"
import { useState, ChangeEvent, useEffect } from "react"
import TypeDataAuth from "./interface/auth"
import Home from './pages/home'
import Votes from './pages/vote'
import Detail from "./pages/detail"
import Register from "./pages/register"
import Login from "./pages/login"
import IndexDashboard from "./pages/dashboard"
import AddPaslon from "./pages/dashboard/paslon/add"
import AddPartai from "./pages/dashboard/partai/add"
import IndexPartai from "./pages/dashboard/partai"
import IndexPaslon from "./pages/dashboard/paslon"
import usePaslon from "./mocks/paslon"
import * as React from "react"
import useUser from "./mocks/user"

function App() {
  // Users
  const findUsers = async ()=> {
    try {
      const response = await fetch("http://localhost:3000/api/v1/users")
      await response.json()
    } catch (error) {
      console.log(error)
    }
  }

  React.useEffect(() => {
    findUsers()
  }, [])

  const navigate = useNavigate()
  
  const { register, handleSetRegister, insertUser } = useUser()
  const { paslon, handleSetPaslon, insertPaslon } = usePaslon()

  // Login
  const [isLogin, setIsLogin] = useState<Boolean>(false)
  const [isLoginDashboard, setIsLoginDashboard] = useState<Boolean>(false)
  const [form, setForm] = useState<TypeDataAuth>({
    username: "",
    password: ""
  })

  const handleSetForm = (event: ChangeEvent<HTMLInputElement>): void => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (form.username === "admin" && form.password === "admin") {
      setIsLoginDashboard(true)
    } else if (form.username !== "" && form.password !== "" && form.username !== "admin" && form.password !== "administrator") {
      setIsLogin(true)
    }
  }

  useEffect(() => {
    if (isLogin) {
      navigate("/")
    } else if(isLoginDashboard) {
      navigate("/dashboard")  
    }
  }, [isLogin, isLoginDashboard])

  // function PrivateRouteDashboard() {
  //   if (isLoginDashboard) {
  //     return <Outlet />
  //   } else {
  //     return <Navigate to="/login" />
  //   }
  // }
  
  // function PrivateRoute() {
  //   if (isLogin) {
  //     return <Outlet />
  //   } else {
  //     return <Navigate to="/login" />
  //   }
  // }

  return (
    <Routes>
        <Route path="login" element={<Login handle={handleSetForm} login={login} />} />
        <Route path="register" element={ <Register handle={handleSetRegister}
                                                   register={register}
                                                   handleSubmitUser={insertUser}
                                        />}/>
        <Route path="dashboard/" element={<IndexDashboard />} />
        <Route path="dashboard/add-paslon" element={<AddPaslon handle={handleSetPaslon} 
                                                               paslon={paslon}
                                                               handleSubmitPaslon={insertPaslon}
                                        />} />
        <Route path="dashboard/add-partai" element={<AddPartai />} />
        <Route path="dashboard/partai" element={<IndexPartai />} />
        <Route path="dashboard/paslon" element={<IndexPaslon />} />
        <Route index element={<Home />} />
        <Route path="votes" element={<Votes />} />
        <Route path="detail" element={<Detail />} />
    </Routes>
  )
}

export default App