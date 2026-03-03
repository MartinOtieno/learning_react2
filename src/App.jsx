
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
// import { useState } from "react"
import Addlearner from "./pages/Addlearner.jsx"
import { Toaster } from "react-hot-toast"
import ViewLearners from "./pages/ViewLearners.jsx"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout.jsx"


export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>} >
        <Route index element ={<ViewLearners/>}  />
        <Route path="/addlearner" element ={<Addlearner/>} />
        </Route>
      </Routes>
      <Addlearner/>

      <ViewLearners />

      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </BrowserRouter>

  )

}