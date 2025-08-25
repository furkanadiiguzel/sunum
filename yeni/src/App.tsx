import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SlideManager } from './components/SlideManager'
import AdminPage from './components/AdminPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/" element={<SlideManager />} />
      </Routes>
    </BrowserRouter>
  )
}
