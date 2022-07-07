import React from 'react'
import ButtonFilter from '../components/buttons/ButtonFilter'
import CardsPortfolio from '../components/portfolio/Cards'

const Portfolio = () => {
  return (

    <section className="mt-10 pb-20 flex flex-col gap-10 w-5/6 mx-auto">

        <div className="pt-32 text-center flex justify-between items-center">
            <h1 className="text-4xl uppercase font-black">Portfolio</h1>
            <div className='flex gap-10 justify-end '>
              <ButtonFilter text='All'/>
              <ButtonFilter text='React'/>
              <ButtonFilter text='CSS'/>
            </div>
        </div>


        <div className="flex justify-center gap-10 flex-wrap my-10">
            <CardsPortfolio/>
            <CardsPortfolio/>
            <CardsPortfolio/>
            <CardsPortfolio/>
        </div>

    </section>
  )
}

export default Portfolio