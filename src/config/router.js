import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Aboutus from "../containers/About";
import Contactus from "../containers/Contactus";
import MainApp from "../components";
function Approuter()
{
    return(
        <div>
            <Router>
                <Routes>
                <Route exact path="/" element={<MainApp/>}/>//router main parent hai uske tag k andar routes banane hnge  phr routes k tag k andar route banane hnge router.js ki file mein. route 2 prop/attribute leta hai ek path aur 2sra element aur uske andar hmne jo home aur about ko class k name k baad name diye hoty hein wo yahan call krne party hein.
                <Route path="/Aboutus" element={<Aboutus/>}/>
                <Route path="/Contactus" element={<Contactus/>}/>
                </Routes>
            </Router>
        </div>
    )
}
export default Approuter;