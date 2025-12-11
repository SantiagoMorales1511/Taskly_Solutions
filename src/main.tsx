import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import DevMaterialsPage from './pages/DevMaterialsPage'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dev-material" element={<DevMaterialsPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

