import { useState } from 'react'
import Header from './components/header/Header'
import Contact from './pages/Contact'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Skills from './pages/Skills'
import Footer from './components/footer/Footer'
import DivLeft from './components/aside/DivLeft'
import DivRight from './components/aside/DivRight'

function App() {

  return (

    <>
    
      <Header/>
          <About/>
          <Portfolio/>
          <Skills/>
          <Contact/>

          <DivLeft/>
          <DivRight/>
        <Footer/>
    
    
    
    
    </>
    
  )
}

export default App

