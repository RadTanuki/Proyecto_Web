import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { ServicesPage } from './pages/Servicios/ServicesPage'
import { ServiceDetailPage } from './pages/Servicios/ServiceDetailPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter >
    
      <Routes>
        
        <Route element={<App />}> 

          {/* localhost*/}
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/services' element={<ServicesPage />}></Route>
          <Route path='/services/:id' element={<ServiceDetailPage />}></Route>
          
        </Route>

      </Routes>

    </BrowserRouter>
  </StrictMode>,
)
