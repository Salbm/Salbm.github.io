import './index.scss';
import React from 'react';
import {Link} from 'react-router-dom';
import NameForm from './formhandler.js';

const  Contact =() => {

return(

<div className = "container-contact-page">
<div className ="text-zone">
    <p> Please Contact me I need monies for food and videogames</p>
<div className = "actual-form">
    <h1>< NameForm/>
    </h1>
</div>
</div>
</div>
);  

}

export default Contact;
