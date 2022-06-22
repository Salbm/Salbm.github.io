import './index.scss';
//An <Outlet> should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered. If the parent route matched exactly, it will render a child index route or nothing if there is no index route.
import {Outlet} from 'react-router-dom'
import Sidebar from '../Sidebar'
import './index.scss';

const Layout = () =>{
    return(
        <div className="App">
        <Sidebar />
        <div className="page">

          <span className="tags top-tags">&lt;body&gt;</span>
  
          <Outlet />
          <span className="tags bottom-tags">

            &lt;/body&gt;
            <br />

            <span className="bottom-tag-html">&lt;/html&gt;</span>   
          </span>
        </div>
      </div>

    )
}

export default Layout