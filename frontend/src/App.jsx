import { useEffect, useState } from 'react'
import Header from './components/header/Header'
import Contact from './pages/Contact'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Skills from './pages/Skills'
import Footer from './components/footer/Footer'
import DivLeft from './components/aside/DivLeft'
import DivRight from './components/aside/DivRight'


import { collection, addDoc, getDocs, doc,onSnapshot,  } from "firebase/firestore";
import {db} from './Firebase'
import LoadingPage from './components/loading/LoadingPage'


function App() {

  const [dark, isDark] = useState(false)


  const [experiencia, setExperiencia] = useState([])

  
  const [proyects, setProyects] = useState([])
  
  const [skills, setSkills] = useState([])

  const [loading, setLoading] = useState(true)


  
  useEffect(() => {
    
    setTimeout(() => {
      
      setLoading(false)
      
    }, 500)
    
    
    const getUser = onSnapshot(
      collection(db, "user"),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        
        setExperiencia(list[0].experiencia)
        setProyects(list[0].proyects)
        setSkills(list[0].skills)
        },

        (error) => {
          console.log(error);
        }
        );
        
        return () => {
          
          getUser();
          
        };
      }, [])
      
      
      useEffect(() => {
        
        if (dark === true) {
          
          document.documentElement.classList.add('dark')
          
          console.log("Modo dark")
        } else {
          
          document.documentElement.classList.remove('dark')
          console.log("Modo light")
        }

      }, [dark])
      
      if(loading) return <LoadingPage/>



      
      return (
        
        <>
    
      <Header dark={dark} isDark={isDark}/>
          <DivLeft/>
          <DivRight/>
          <About dark={dark}/>
          <Portfolio proyects={proyects} dark={dark}/>
          <Skills experiencia={experiencia} skills={skills} dark={dark}/>
          <Contact dark={dark}/>


        <Footer dark={dark}/>
    
    </>
    
  )
}

export default App

