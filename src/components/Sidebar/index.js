import './index.scss'
import {Link,NavLink} from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons'
import {faHome, faUser,faEnvelope} from '@fortawesome/free-solid-svg-icons'


//Link:
//NavLink: Navigation to other pages I put in this??
const Sidebar =()=>(
<div className='nav-bar'>
    <Link className ='logo' to = '/'>
        <img src={LogoS} alt ="logo"/> 
        <img className="sub-logo" src={LogoSubtitle} alt ="stephname"/>    
    </Link>

    <nav>
        <NavLink exact= "true" activateclassname="activate" to="/">
            <FontAwesomeIcon icon ={faHome} color ="black"/>

        </NavLink>


        <NavLink exact= "true" activateclassname="activate" className ="about-link" to="/about">
            <FontAwesomeIcon icon ={faUser} color ="black"/>

        </NavLink>


        <NavLink exact= "true" activateclassname="activate" className="contact-link" to="/contact">
            <FontAwesomeIcon icon ={faEnvelope} color ="black"/>

        </NavLink>
    </nav>

    
    <ul>
        <li>
            <a target = "_blank" 
            rel= "nonreferrer" 
            href ="https://www.linkedin.com/in/stephanie-albornoz-a45a5b196">

                <FontAwesomeIcon icon = {faLinkedin} color = "black"/>
            </a>

        </li>


        <li>
            <a target = "_blank" 
            rel= "nonreferrer" 
            href ="https://github.com/salbm">

                <FontAwesomeIcon icon = {faGithub} color = "black"/>
            </a>

        </li>

    </ul>


</div>

)

export default Sidebar