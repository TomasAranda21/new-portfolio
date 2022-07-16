import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faBriefcase, faCode , faEnvelope, faHome, faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import './loading.css'
import Img_fondo from '../../assets/fondoLoading.jpg'


const LoadingPage = () => {
  return (
    <div className="no-freeze-spinner">
  
        <img className="h-screen w-full brightness-75 object-cover" src={Img_fondo} />

            <div id="no-freeze-spinner">
                <div className="">

                    <i>
                        <FontAwesomeIcon icon={faHome} className="icons"/>
                    </i>

                    <i>
                        <FontAwesomeIcon icon={faBriefcase} className="icons"/>
                    </i>

                    <i>
                        <FontAwesomeIcon icon={faCode} className="icons"/>
                    </i>
                    
                <div>

                </div>
                </div>
            </div>
        </div>
  )
}

export default LoadingPage