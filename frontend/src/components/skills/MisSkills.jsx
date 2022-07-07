import React from 'react'
import ObjSkill from '../objJson/skills'
import CardsSkills from './CardsSkills'
import HardSkills from './HardSkills'

const MisSkills = () => {
  return (
    <>
        <h3 className="text-2xl font-medium">Mis Skills</h3>

        <div
        className='flex flex-col md:flex-row gap-10 text-center mt-5 md:justify-between'
        >
            {ObjSkill.map(skil => (
                <div key={skil.id}>
                    <CardsSkills text={skil.type}>

                    {skil.skills.map(text => (
                        <div key={text} >
                            <HardSkills

                            text={text}

                            />

                        </div>
                    ))}

                    </CardsSkills>
                </div>
            ))}
        </div>
    </>
  )
}

export default MisSkills