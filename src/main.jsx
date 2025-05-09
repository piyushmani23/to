import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from '../src/Components/Hero.jsx'
import Product from './Components/Latest_product.jsx'
import About from './Components/About.jsx'
import Price from './Components/Price.jsx'
import Blog from './Components/Blog.jsx'
import Testimonial from './Components/Testimonial.jsx'
import Footer from './Components/Footer.jsx'
import Reser from './Components/Reser.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero/>
    <Product/>
    <About/>
    <Price/>
    <Blog/>
    <Testimonial/>
    <Footer/>
    <Reser/>
  </StrictMode>,
)
