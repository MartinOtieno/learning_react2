
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
// import './App.css'


export default function App() {
  const fruits = ["mangoes", "bananas", "Pinaple"]
  const x = "2026"

  const title = "Learning React"
  const links =["Home", "About", "Contact"]

  return (
    <>
    <Navbar title={title} links={links} />

    <h1>Vite + React</h1>

    <Footer fruits={fruits} year={x} name="Kelvin" />
    </>
  )
}

//. export default App
