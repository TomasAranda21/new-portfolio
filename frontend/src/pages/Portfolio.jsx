import React from 'react'
import CardsPortfolio from '../components/portfolio/Cards'
import { useInView } from 'react-intersection-observer'


const Portfolio = ({dark, proyects}) => {

  const {ref, inView } = useInView({triggerOnce: true});



  return (

    <section className="bg_portfolio bg-gray-100 dark:bg-slate-700" id="portfolio">

      <div className={inView ? `relative top-0 delay-200 opacity-100 duration-700 ease-in-out` : 'relative top-96 opacity-0 duration-700 ease-in-out'} ref={ref}>

        <div className=" flex flex-col gap-10 w-4/6 mx-auto ">

          <div className="pt-10 text-center ">
              <h1 className="text-4xl uppercase font-black">Portfolio</h1>
              
          </div>

          <div className="flex justify-center gap-10 flex-wrap my-10">
            {proyects?.map(proy => (
              
              <div key={proy.name}>
                <CardsPortfolio img={proy.img} name={proy.name} description={proy.description} linkWeb={proy.linkWeb} linkGit={proy.linkGit}/>

              </div>

            ))}
      
          </div>


        </div>

      </div>

    </section>
  )
}

export default Portfolio