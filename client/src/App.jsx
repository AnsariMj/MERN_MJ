import './App.css'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home/Home'
function App() {

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
