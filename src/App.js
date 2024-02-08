import React from 'react'
import Navbar from './components/NavBar'
import '../src/css/app.css';
import ProductCard from './components/ProductCard';

const App = () => {
  return (
    <>
      <Navbar />
      <ProductCard />
    </>
  )
}

export default App