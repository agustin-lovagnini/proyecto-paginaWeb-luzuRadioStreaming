import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProgramaDetalle from './pages/ProgramaDetalle'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programas/:slug" element={<ProgramaDetalle />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App