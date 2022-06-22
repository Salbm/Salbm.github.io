import LogoTitle from '../../assets/images/logo-s.png'
import {Link} from 'react-router-dom'
import './index.scss'
import Atrocity from './hellobogosort.js'

//htags are like headers titles 
const Home = () => {

    return (
        <div className = "container home-page">
            <div className ="text-zone">
                <h1>
                    Hi, <br/> Idkno react, here is hello world, uhh, but in bogosort
                    web dev is fun tho
                    <br />
                    _(:3」∠)
                    </h1>

                    <h2>Half Stack Developer / Needs a job to not starve</h2>
                    <Link to ="/contact" className='flat-button'> CONTACT ME</Link>
                    <h3> <Atrocity/> </h3>
            </div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.6.3/umd/react.production.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.6.3/umd/react-dom.production.min.js"></script>

  <         div id="root"></div>
        </div>

        
    );
}

export default Home;