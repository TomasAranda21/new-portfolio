import React from 'react'
import ButtonFilter from '../components/buttons/ButtonFilter'
import CardsPortfolio from '../components/portfolio/Cards'

const Portfolio = ({dark}) => {
  return (

    <section className="bg_portfolio bg-gray-100 dark:bg-slate-700" id="portfolio">

      <div className=" flex flex-col gap-10 w-4/6 mx-auto ">

        <div className="pt-10 text-center ">
            <h1 className="text-4xl uppercase font-black">Portfolio</h1>
            
        </div>
        {/* <div className="pt-32 text-center flex flex-col gap-6 lg:flex-row lg:gap-0 justify-between items-center">
            <h1 className="text-4xl uppercase font-black">Portfolio</h1>
            <div className='flex gap-10 justify-end '>
              <ButtonFilter text='All'/>
              <ButtonFilter text='React'/>
              <ButtonFilter text='CSS'/>
            </div>
        </div> */}


        <div className="flex justify-center gap-10 flex-wrap my-10">
            <CardsPortfolio/>
            <CardsPortfolio/>
            <CardsPortfolio/>
            <CardsPortfolio/>
            <CardsPortfolio/>
            <CardsPortfolio/>
        </div>


      </div>


    </section>
  )
}

export default Portfolio