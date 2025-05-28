import { Route, Routes } from "react-router"
import { Navbar } from "./components/Navbar"
import { AddCity } from "./pages/AddCity"
import { Index } from "./pages/Index"

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Index />}/>
        <Route path='/addCitie' element={<AddCity />}/>
      </Routes>
    </>
  )
}

export default App
