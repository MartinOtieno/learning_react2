
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
// import { useState } from "react"
import Addlearner from "./components/Addlearner.jsx"
import { Toaster } from "react-hot-toast"
import ViewLearners from "./components/ViewLearners.jsx"


export default function App() {


  return (
    <div className="mx-20">
    
    <Navbar />

    <Addlearner />
    
    <ViewLearners/>

    <Footer />

    <Toaster
      position="top-center"
      reverseOrder={false}
    />
    </div>
  )
}

//. export default App
