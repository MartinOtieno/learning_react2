
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import { useState } from "react"
// import './App.css'


export default function App() {

  const [x, setx] = useState(2025)

  return (
    <>
    
    <Navbar/>

    <h4 className="text-3xl">{x}</h4>
    <button onClick={() => setx(x+1)} classnmae="border p-1">Click to add 1</button>

    <Footer />
    </>
  )
}

//. export default App
