import React, { useState } from 'react'
import ButtonSkills from '../components/buttons/ButtonSkills'
import ObjExp from '../components/objJson/ObjExp'
import ObjSkill from '../components/objJson/skills'
import CardsSkills from '../components/skills/CardsSkills'
import CarouselSkills from '../components/skills/CarouselSkills'
import Education from '../components/skills/Education'
import Experiencia from '../components/skills/Experiencia'
import HardSkills from '../components/skills/HardSkills'
import MisSkills from '../components/skills/MisSkills'

const Skills = ({dark}) => {


  const [isEducation, setIsEducation] = useState(false)



  return (
    
    <section className=" bg-verdeClaro5 bg-azul5  " id="skills">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill={`${dark ? '#334155' : "#f1f5f9"}`} fillOpacity="1" d="M0,160L30,160C60,160,120,160,180,176C240,192,300,224,360,218.7C420,213,480,171,540,149.3C600,128,660,128,720,133.3C780,139,840,149,900,176C960,203,1020,245,1080,266.7C1140,288,1200,288,1260,282.7C1320,277,1380,267,1410,261.3L1440,256L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
      </svg>

      <div className="lg:w-4/6 mx-auto py-10 flex flex-col gap-6 p-5 lg:p-0">

        <h2 className="text-4xl font-black text-center lg:text-left">Skills & Experiencia</h2>

      <div className="flex flex-col lg:flex-row justify-between gap-10 text-center lg:text-left">
        <div className="lg:w-1/2 ">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque facere eos aliquam nihil, quas inventore! Officiis a fuga optio asperiores.</p>
        

          <div className="py-3">

            <MisSkills/>

          </div>
        
        </div>


      <div className="flex flex-col items-center gap-10 lg:w-1/2">
        <div className="flex gap-3 items-center">
          {/* <ButtonSkills text="Experiencia" onClick={() => setIsEducation(false)} education={isEducation}/>
          <ButtonSkills text="Educacion" onClick={() => setIsEducation(true)} education={isEducation}/> */}


          {/* <button onClick={() => setIsEducation(false)}
          className={`px-10 p-3 border-2 rounded-lg text-gray-800 font-bold ${!isEducation ? "bg-naraja text-white" : "bg-transparent"} `}
          >Experiencia</button>

          <button onClick={() => setIsEducation(true)}
          className={`px-10 p-3 border-2 rounded-lg text-gray-800 font-bold ${isEducation ? "bg-azul3 text-white" : "bg-transparent"} `}
          >Educacion</button> */}
          <h3 className="font-semibold text-3xl">Experiencia</h3>

        </div>

          {!isEducation ? 
          <div className="flex justify-center gap-8 flex-wrap">

          {ObjExp.map(exp => (

            <div key={exp.id} className="">

              <Experiencia date={exp.date} title={exp.title} description={exp.description} client={exp.client} link={exp.link}/>

            </div>


          ))}

        </div>
        
        
          :
          
          <CarouselSkills/>

        }
        

        

      </div>


      </div>


      </div>


      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill={`${dark ? '#0f172a' : "#f1f5f9"}`} fillOpacity="1" d="M0,32L30,37.3C60,43,120,53,180,96C240,139,300,213,360,245.3C420,277,480,267,540,234.7C600,203,660,149,720,144C780,139,840,181,900,213.3C960,245,1020,267,1080,266.7C1140,267,1200,245,1260,208C1320,171,1380,117,1410,90.7L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
      </svg>

    </section>
  )
}

export default Skills