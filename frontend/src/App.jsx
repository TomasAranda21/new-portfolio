import { useState } from 'react'
import Header from './components/header/Header'
import Contact from './pages/Contact'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Skills from './pages/Skills'

function App() {

  return (

    <>
    
      <Header/>
        <div className=" w-5/6 mx-auto">
          <Portfolio/>
          <About/>
          <Skills/>
          <Contact/>
        </div>
    
    
    
    
    </>
    
  )
}

export default App

