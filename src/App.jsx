import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CielWebDesignLandingPage from './CielWebDesignLandingPage'
import HairSalon from './pages/works/HairSalon'
import Izakaya from './pages/works/Izakaya'
import Seitai from './pages/works/Seitai'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CielWebDesignLandingPage />} />
        <Route path="/works/salon" element={<HairSalon />} />
        <Route path="/works/izakaya" element={<Izakaya />} />
        <Route path="/works/seitai" element={<Seitai />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
