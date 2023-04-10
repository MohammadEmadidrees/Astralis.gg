import React, { useEffect } from 'react';
import { BrowserRouter as Router,  Routes,  Route ,Link} from "react-router-dom"
import Aos from 'aos';
import "aos/dist/aos.css"
import '../../src/App.css';

const Aboutus=() =>{
    useEffect(()=>{
        Aos.init({duration:1000});
    },[]);
    return(
        <>
        <div className='divoflink' data-aos="fade-left">
            {<Link  className='linkmainpage' to={"/"}>Go to Main Page</Link>}
        </div>
        <div>
                <div className='AstralisFamilyAbout'>
                    <h1 data-aos="fade-left" className='headofaboutus'>About US</h1>
                    <p className='aboutustext' data-aos="fade-left">Hello We Are Astralis Family We Are The Most Competiting Gaming Team In Denmark. We Have Different Teams In Different Gaming Competitons We Have Our PUBG Team We Have Our Counter Strike Global Offensive Team We Have Rainbow Six Team
                        We Won 4 Majors In Counter Strike Global Offensive History Which Is Our Biggest Achievements In Counter Strike Global Offensive History. Currently Our Counter Strike Global Offensive Team Working and Practicing Hard To Make RMR Paris Qualifer Easily.
                        We Also Qualified For Blast Premiere Dubai We Will Work Hard And Will Make Our Fans Proud #ToTheStars.
                    </p>
                </div>

        </div>
        </>

    )
}
export default Aboutus;