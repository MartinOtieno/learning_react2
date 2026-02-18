
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
// import { useState } from "react"
import Addlearner from "./components/Addlearner.jsx"
import { Toaster } from "react-hot-toast"


export default function App() {


  return (
    <div className="mx-20">
    
    <Navbar />

    <Addlearner />

    <Footer />

    <Toaster
      position="top-center"
      reverseOrder={false}
    />
    </div>
  )
}

//. export default App
