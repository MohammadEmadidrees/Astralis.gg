import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"
import Bybit from "../../src/ByBit.png"
import LogitechLogo from "../../src/LogitechLogo.png"
import Omen from "../../src/omen.png"
import Hummel from "../../src/hummel.png"
import Faceit from "../../src/faceitlogo.png"
import Astralisnexus from "../../src/astralisnexus.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook,faTwitter,faTwitch,faLinkedin,faYoutube} from '@fortawesome/free-brands-svg-icons'
import Toplogo from "../../src/toplogo.png"
const Fade=() =>{
        useEffect(()=>{
            Aos.init({duration:1000});
        },[]);
    return(
    <><><><div data-aos="fade-left" className='animation'>
            <a  href="https://www.bybit.com/en-US/" target="_blank">
            <img
                src={Bybit}
                height='100px'
                width='200px'
                alt='Bybit'
                />
            </a>
            <a  href="https://www.logitech.com/" target="_blank">
            <img
                src={LogitechLogo}
                height='100px'
                width='200px'
                alt='Logitech'
                />
            </a>
            <a  href="https://www.omen.com/us/en.html" target="_blank">
            <img
                src={Omen}
                height='100px'
                width='200px'
                alt='Omen'
                />
            </a>
            <a  href="https://www.hummel.net/" target="_blank">
            <img
                src={Hummel}
                height='100px'
                width='200px'
                alt='Hummel'
                />
            </a>
            <a  href="https://www.faceit.com/" target="_blank">
            <img
                src={Faceit}
                height='100px'
                width='200px'
                alt='Faceit'
                />
            </a>
        </div>
            <div className='divofupcomingmatch'>

                <h1 data-aos="fade-left" className='upcomingmatch'>UPCOMING <br></br>
                    MATCHES</h1>
                <h5 data-aos="fade-left" className='seenow'>SEE NOW</h5>
            </div>
        </>
            <div className='divofastralisfamily'>
                <h1 data-aos="fade-left" className='astralisfamily'>FOLLOW <br></br>
                    THE<br></br>
                    ASTRALIS <br></br>
                    FAMILY
                </h1>
            </div>
                <div className='joinastralisfamily'>
                    <h2 data-aos="fade-left">JOIN THE <br></br>ASTRALIS FAMILY</h2>
                    <p data-aos="fade-left" className='para'>Sign up for the official Astralis newsletter for <br></br> exclusive insights,
                        the latest news, content, and <br></br> exciting offers.</p>
                    <input data-aos="fade-left" required className='FSFIELD' placeholder='First Name' type="text">

                    </input>
                    <input data-aos="fade-left" required className='EMAILFS' placeholder='Email' type="email">

                    </input>
                    <button data-aos="fade-left" className='submitbtn' type='submit'>
                        Sign up
                    </button>
                </div>
            

            <div className='mainbg'>
                <div className='bg'>
                    <img src={Astralisnexus} className='bgimg' />
                </div>
                <div className='astralisnexusdiv'>
                    <h1 data-aos="fade-left" className='astralisnexus'>ASTRALIS <br></br>
                        NEXUS</h1>
                    <h5 data-aos="fade-left" className='visitnow'>VISIT NOW</h5>
                </div>
            </div>
        </>
        <div className="divoffooter">
            <div className='fivecomponentfooter' data-aos="fade-left">
            <a className="allfootercomponents" target={'_blank'} href='https://www.astralis.gg/news'>News</a>
            <a className="allfootercomponents" target={'_blank'} href='https://www.astralis.gg/teams'>Teams</a>
            <a className="allfootercomponents" target={'_blank'} href='https://www.astralis.gg/schedule'>Schedule</a>
            <a className="allfootercomponents" target={'_blank'} href='https://www.astralis.gg/talent'>Talent</a>
            <a className="allfootercomponents" target={'_blank'} href='https://shop.astralis.gg/'>Shop</a>
            <br></br>
            <p className='footertextcol'>©ASTRALIS
            • 2021 • OTTO BUSSES VEJ 7, 2450 KØBENHAVN SV</p>
            </div>
            <div className='divofsocialicons' data-aos="fade-left">
            <a className="allsocialicons" target={"_blank"} href='https://www.facebook.com/astralisgg'><FontAwesomeIcon icon={faFacebook}/>Facebook</a>
            <a className="allsocialicons" target={"_blank"} href='https://twitter.com/astralisgg'><FontAwesomeIcon icon={faTwitter}/>Twitter</a>
            <a className="allsocialicons" target={"_blank"} href='https://www.twitch.tv/team/astralis'><FontAwesomeIcon icon={faTwitch}/>Twitch</a>
            <a className="allsocialicons" target={"_blank"} href='https://www.linkedin.com/company/astralisorg/'><FontAwesomeIcon icon={faLinkedin}/>Linkedin</a>
            <a className="allsocialicons" target={"_blank"} href='https://www.youtube.com/astralisgg'><FontAwesomeIcon icon={faYoutube}/>CS:GO Youtube</a>
            </div>
            <div data-aos="fade-left" className='divoftop'>
            <a href="#Top" class="top">
            <img src={Toplogo}  className="toplogoclass"/>
            </a>
            </div>
        </div>
    </>
            
    );

}
export default Fade;