import { BrowserRouter, Routes, Route  } from "react-router-dom"
import Home from './pages/home'
import Votes from './pages/vote'
import Detail from "./pages/detail"

import Navbar from './components/navbar'
import Address from './components/address'
import Footer from './components/footer'
import Register from "./pages/register"
import Login from "./pages/login"
import IndexDashboard from "./pages/dashboard"
import AddPaslon from "./pages/dashboard/paslon/add"
import AddPartai from "./pages/dashboard/partai/add"
import IndexPartai from "./pages/dashboard/partai"
import IndexPaslon from "./pages/dashboard/paslon"


function App() {
  return (
    <>
     <BrowserRouter>
          <Navbar/>
            <Routes>
                <Route index element={<Home />} />
                <Route path="votes" element={<Votes />} />
                <Route path="detail" element={<Detail />} />
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />
                <Route path="dashboard" element={<IndexDashboard />} />
                <Route path="add-paslon" element={<AddPaslon />} />
                <Route path="add-partai" element={<AddPartai />} />
                <Route path="dashboard/paslon" element={<IndexPaslon />} />
                <Route path="dashboard/partai" element={<IndexPartai />} />
            </Routes>
          <Address/>
          <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
