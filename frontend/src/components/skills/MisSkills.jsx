import React from 'react'
import HardSkills from './HardSkills'

import backend from '../../assets/backend2.png'
import frontend from '../../assets/frontend2.png'
import {faArrowDown} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const MisSkills = ({skills}) => {

  return (
    <>
        <h3 className="text-2xl font-medium text-center mt-5">Mis Skills</h3>

        <div
        className='flex gap-2 items-center lg:flex-row lg:gap-10 text-center mt-5 md:justify-between mb-20 lg:mb-0'
        >
            {skills.map(skil => (
                
             <div className="container_cards " key={skil.type}>
                <div className="card_logo_title bg-gradient-to-t from-verdeClaro2 to-azulClaro">
                    <p className="font-bold text-2xl capitalize">{skil.type}</p>

                    <div className=" overflow-hidden h-32 w-20 mx-auto">
                        <img className="object-cover" src={skil.type === 'frontend' ? frontend : backend } alt=""  width={120}/>

                    </div>

                    <div><FontAwesomeIcon icon={faArrowDown}/></div>
                </div>  

                <div className="card_text">

                {skil?.skill?.map(text => (
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