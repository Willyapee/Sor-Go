import React from 'react'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Product from './pages/product.jsx'
import Product1 from './pages/product1.jsx'
import Product2 from './pages/product2.jsx'
import Why from './pages/why.jsx'
import Contact from './pages/contact.jsx'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/product1" element={<Product1/>} />
          <Route path="/product2" element={<Product2/>} />
          <Route path="/why" element={<Why/>} />
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
  )
}

export default App
