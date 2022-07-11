import React from 'react'
import ObjSkill from '../objJson/skills'
import CardsSkills from './CardsSkills'
import HardSkills from './HardSkills'

const MisSkills = () => {
  return (
    <>
        <h3 className="text-2xl font-medium text-center mt-5">Mis Skills</h3>

        <div
        className='flex gap-2 items-center lg:flex-row lg:gap-10 text-center mt-5 md:justify-between mb-20 lg:mb-0'
        >
            {ObjSkill.map(skil => (
                
             <div className="container_cards " key={skil.id}>
                <div className="card_logo_title bg-gradient-to-t from-verdeClaro2 to-azulClaro">
                    <p className="font-bold text-2xl">{skil.type}</p>

                    <div className=" overflow-hidden h-32 w-20 mx-auto">
                        <img className="object-cover" src={skil.img} alt=""  width={120}/>

                    </div>
                </div>  

                <div className="card_text">

                {skil.skills.map(text => (
                    <div key={text} className="">
                        <HardSkills

                        text={text}

                        />

                    </div>
                ))}
                        
                </div>
            
            </div>
            ))}
        </div>

    </>
  )
}

export default MisSkills