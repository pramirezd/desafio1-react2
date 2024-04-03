import { Routes, Route } from "react-router-dom"
import React from "react"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Contacto from "./pages/Contacto"
import NotFound from "./pages/NotFound"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route 
          path="/" 
          element={<Home />} 
        />
        <Route 
          path="/contacto" 
          element={<Contacto />} 
        />
        <Route 
          path="*" 
          element={<NotFound />}
        />
      </Routes>
    </>
  )
}

export default App