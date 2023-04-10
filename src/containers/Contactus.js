import React, { useEffect } from 'react';
import { BrowserRouter as Router,  Routes,  Route ,Link} from "react-router-dom"
import Aos from 'aos';
import "aos/dist/aos.css"
import '../../src/App.css';
import Logo from "../../src/logoas.png"
const Contactus=() =>{
    useEffect(()=>{
        Aos.init({duration:1000});
    },[]);
    return(
    <>
        <div>
            <div className='divoflink' data-aos="fade-left">
                {<Link className='linkmainpage' to={"/"}>Go to Main Page</Link>}
            </div>
        </div>
        
        <div className='Maindivofcmmnt'>
            <div className='divofcontactform' data-aos="fade-left">
            <p className='paraofcmmnt'>Leave Us A Message We Always Like To Hear From Our Fans</p>
            <img className='cmmntlogo' src={Logo} width="100px" height="100px" alt="Astralis Logo"/>
            <br></br>
            <input className='inputofname' type="text" required placeholder='Enter your name'/>
            <input className='inputofemail' type="email" required placeholder='Enter your email'/>
            <input type="text" className='classofcomment' size="50" maxLength="200"/>
            <button type="submit" className='cmmntbtn'>Submit</button>
            </div>
        </div>
    </>
    )
}
export default Contactus;
