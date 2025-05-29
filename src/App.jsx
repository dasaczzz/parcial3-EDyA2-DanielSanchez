import { Route, Routes } from "react-router"
import { Navbar } from "./components/shared/Navbar"
import { AddCity } from "./pages/AddCity"
import { Index } from "./pages/Index"

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Index />}/>
        <Route path='/addCity' element={<AddCity />}/>
      </Routes>
    </>
  )
}

export default App
