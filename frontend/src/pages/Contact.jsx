import axios from 'axios'
import { Formik } from 'formik'
import {useState, useEffect, useRef} from 'react'
import ButtonCV from '../components/buttons/Button';
import Inputs from '../components/contact/Inputs';
import MsjError from '../components/contact/MsjError';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone,faLocationDot,faEnvelope,   } from '@fortawesome/free-solid-svg-icons'



const Contact = () => {

    const [mensaje, setMensaje] = useState({})

    const expresiones = {
        exp_nombre: /^[a-zA-ZÁ-ÿ\'\"\´\s]{2,50}$/,
        exp_email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        exp_mensaje: /^[a-zA-ZÁ-ÿ-0-9\?\!\¿\¡\(\)\"\'\.\:\;\,\s]{0,600}$/
    }

  return (

    <section id="contacto" className="bg_contact">
        <div className="w-5/6 mx-auto ">

            <div  className="">
            <h2
            className=" text-center font-black uppercase text-3xl">Contactame
            </h2>
            </div>

        <div>


            <div className="flex flex-col lg:flex-row justify-around gap-10 lg:gap-20 my-10 lg:my-14 p-2">
                
                <div 
                className="mt-5">
                    <ul 
                    className="flex text-xl flex-col gap-10">

                        <div className="flex flex-col lg:flex-row gap-4 items-center hover:cursor-default cursor-default ">
                            <li className="bg-teal-500 p-3 px-4 rounded-full"><FontAwesomeIcon className="" icon={faLocationDot}/></li>
                            <p className="text-gray-800  hover:text-teal-500 duration-300 lineal">Córdoba, Argentina</p>
                        </div>
                        
                        <div className="">
                            <a href="mailto:tomasaranda2018@gmail.com" className="flex flex-col lg:flex-row gap-4 items-center">
                                <li className="bg-teal-500 p-3 px-4 rounded-full "><FontAwesomeIcon icon={faEnvelope}/></li>
                                <p className="text-gray-800  text-lg hover:text-teal-500 hover:cursor-pointer duration-300 lineal">tomasaranda2018@gmail.com</p>
                            </a>
                        </div>

                    </ul>
                </div>
                <div
                className="w-full xl:w-1/3 lg:w-1/2">

                <Formik
                initialValues={{nombre: '', email: '', mensaje: ''}}
                validate={({nombre, email, mensaje}) => {
                    const errores = {}

                    if(!nombre){
                        errores.nombre = "Nombre no puede ir vacio"

                    }else if(!expresiones.exp_nombre.test(nombre)){
             

                        errores.nombre = "Por favor ingresa un nombre válido"
                    }


                    if(!email){
                        errores.email = "Email no puede ir vacio"

                    }else if(!expresiones.exp_email.test(email)){
             

                        errores.email = "Por favor ingresa un email válido"
                    }


                    if(!mensaje){

                        errores.mensaje = "Mensaje no puede ir vacio"
                       
                    }else if(!expresiones.exp_mensaje.test(mensaje)){

                        errores.mensaje = 'No se permite caracteres especiales'
                    
                    }else if(mensaje.length < 5 ){
                        errores.mensaje = "¿Eso es todo?"
                    


                    

                    }else if(mensaje.length > 450){
                        errores.mensaje = "El mensaje es demasiado largo"
                    

                        
                    }

                    return errores

                }}

                onSubmit={async (values, {resetForm}) => {
                    // const url = `${import.meta.env.VITE_BACKEND_URL}`
                    
                    // const config = {
                    //     headers: {
                    //         "Content-Type": "application/json"
                    //     }
                    // }
              
                    // await axios.post(url, values)
                    
                    // setMensaje({
                    //     msg: '¡Tu mensaje ha sido recibido con exito!'
                    // })
                    // setTimeout(() => {
                    //     setMensaje({})
                    // }, 4000)

                    console.log(values)

                    resetForm()
                }}


                >
                {({values, handleChange, handleSubmit, handleBlur, errors, touched}) => (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-8" >
                        <div className="flex flex-col gap-2">
                            <Inputs
                            error={errors.nombre}
                            touched={touched.nombre}
                            label={"Nombre"}
                            type="text" 
                            name='nombre'
                            onChange={handleChange}
                            value={values.nombre}
                            onBlur={handleBlur}
                            htmlFor={'nombre'}
                            id={'nombre'}
                            />
                            {errors.nombre && touched.nombre && <MsjError mensaje={errors.nombre}/>}

                        </div>

                        <div className="flex flex-col gap-2">
                            <Inputs
                                label={"Email"}
                                error={errors.email}
                                touched={touched.email}
                                type="email" 
                                name='email'
                                onChange={handleChange}
                                value={values.email}
                                onBlur={handleBlur}
                                htmlFor={'email'}
                                id={'email'}
                            />

                            {errors.email && touched.email && <MsjError mensaje={errors.email}/>}

                        </div>

                        <div className="flex flex-col gap-20">
                            <div className="Inputs_label_Contact mb-2">

                                <textarea 
                                    name="mensaje" 
                                    value={values.mensaje}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    id="mensaje" 
                                    cols="30" 
                                    rows="10" 
                                    autoComplete="off"

                                    className={`input_contact absolute mt-1 px-3 py-2 outline-none bg-transparent border shadow-sm text-gray-900 border-gray-400 placeholder-slate-400 
                                    focus:outline-none w-full block rounded-md ${errors.mensaje && touched.mensaje ? "focus:border-red-400 border-red-400" : "focus:border-sky-400"} `}
                                    placeholder=' '>
                                </textarea>

                                <label htmlFor={mensaje} className="label_contact text-gray-900">Mensaje</label>
                            </div>


                            <div className="mt-44">
                                {errors.mensaje && touched.mensaje && <MsjError mensaje={errors.mensaje}/>}
                            </div>
                        </div>

                            <div className="h-3 w-full">
                                <ButtonCV
                                text="Enviar"
                                type="submit"
                                />

                            </div>


                        {mensaje.msg && <div className="text-white text-center text-xl">{mensaje.msg}</div>}

                    </form>

                )}
                    
                </Formik>

                </div>
            </div>
            </div>
        </div>

    </section>
  )

}

export default Contact