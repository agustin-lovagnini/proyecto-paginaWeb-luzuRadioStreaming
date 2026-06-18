import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProgramaDetalle from './pages/ProgramaDetalle'
import './App.css'

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programas/:slug" element={<ProgramaDetalle />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
