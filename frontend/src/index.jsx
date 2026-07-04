
import "react-toastify/dist/ReactToastify.css"
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './landing_page/Navbar'
import Footer from './landing_page/Footer'
import HomePage from './landing_page/home/HomePage'
import SupportPage from './landing_page/support/SupportPage'
import SignUp from './landing_page/signup/Signup'
import AboutPage from './landing_page/about/AboutPage'
import ProductPage from './landing_page/products/ProductPage'
import PricingPage from './landing_page/pricing/PricingPage'
import Login from './landing_page/signup/Login'
import NotFound from './landing_page/NotFound'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/product' element={<ProductPage />} />
      <Route path='/pricing' element={<PricingPage />} />
      <Route path='/support' element={<SupportPage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer />

  </BrowserRouter>
)
