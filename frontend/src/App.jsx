import { useState } from 'react'
import { BrowserRouter,Routes, Route} from 'react-router-dom'
import IndexPage from './pages'
import ServicePage from './pages/services_health'
import FaqPage from './pages/faq'
import SignupForm from './pages/signup'
import DepartmentsPage from './pages/dept'
import ContactPage from './pages/contact'
function App() {

  return (
   <BrowserRouter>
     <Routes>
        <Route index element={<IndexPage />} />
        <Route path='/services' element={<ServicePage />} />
        <Route path='/faq' element={<FaqPage />} />
        <Route path='/signup' element={<SignupForm />} />
        <Route path='/departments' element={<DepartmentsPage />} />
        <Route path='/contact' element={<ContactPage />} />




      </Routes>
  </BrowserRouter>
  )
}

export default App
