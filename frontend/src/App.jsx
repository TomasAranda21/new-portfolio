import { useEffect, useState } from 'react'
import Header from './components/header/Header'
import Contact from './pages/Contact'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Skills from './pages/Skills'
import Footer from './components/footer/Footer'
import DivLeft from './components/aside/DivLeft'
import DivRight from './components/aside/DivRight'

function App() {

  const [dark, isDark] = useState(false)

  useEffect(() => {

    if (dark === true) {

      document.documentElement.classList.add('dark')

      console.log("Modo dark")
    } else {

      document.documentElement.classList.remove('dark')
      console.log("Modo light")
    }

  }, [dark])

  return (

    <>
    
      <Header dark={dark} isDark={isDark}/>
          <About dark={dark}/>
          <Portfolio dark={dark}/>
          <Skills dark={dark}/>
          <Contact dark={dark}/>

          <DivLeft/>
          <DivRight/>

        <Footer dark={dark}/>
    
    
    
    
    </>
    
  )
}

export default App

