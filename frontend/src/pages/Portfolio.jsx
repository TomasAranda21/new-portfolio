import React from 'react'
import CardsPortfolio from '../components/portfolio/Cards'

const Portfolio = () => {
  return (

    <section className="mt-10 pb-20 flex flex-col gap-10">

        <div className="pt-32 text-center">

            <h1 className="text-3xl uppercase font-fontTitles ">Portfolio</h1>
            <p className="text-xl">Estos son algunos de mis proyectos personales</p>

        </div>

        <div className="flex justify-center gap-10 flex-wrap">
            {/* <CardsPortfolio/>
            <CardsPortfolio/>
            <CardsPortfolio/> */}
        </div>

    </section>
  )
}

export default Portfolio