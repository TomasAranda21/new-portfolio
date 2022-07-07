import React from 'react'
import ButtonAbout from '../components/buttons/ButtonAbout'

const About = () => {
  return (

    <section className="relative py-40">

      <div className="flex justify-center gap-20 relative z-10 items-center">


        <div className="w-1/3 flex flex-col gap-5 ">

          <h1 className="text-3xl font-fontTitles uppercase font-bold">Sobre mi</h1>
          <p>A mi corta edad realicé un negocio online que me permitió comprar mi primera computadora y pude encontrar este maravilloso mundo de la programación. Lo que al principio solo fue un pasa tiempo, con estudio y dedicación se convirtió en una de las cosas que más amo hacer en mi día a día. Por lo que siempre trabajo para lograr el mejor resultado en cada proyecto que tengo en mis manos.</p>
          
          
          <p>Lo próximo que quiero en mi vida es tener una oportunidad laboral en el que pueda colaborar con mis conocimientos, además me gustaría mucho poder compartir con otras personas y aprender de ellas para poder seguir creciendo como persona y como profesional.</p>
        
            <ButtonAbout text="Descargar CV"/>

        </div>

        <div className=' overflow-hidden shadow-xl rounded-full relative bg-rosaClaro'>
          <img className=" object-cover" src="https://tomasaranda.com/assets/fotoPerfil.b9fa0696.webp" alt="" width="340" />

        </div>



      </div>

          <div className="bg_img border-2">

          </div>

      <div className='absolute z-0 text-center text-gray-100 text-10xl font-bold top-0 left-1/3'>
        <h2>About</h2>

      </div>

    </section>


  )
}

export default About