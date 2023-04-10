import * as React from 'react';
import  Navbarr from '../../src/components/navbar'
import Carousal from '../../src/components/carousal'
import Cards from '../../src/components/cards'
import  Fade  from '../../src/components/partner'


function MainApp()
{
  return (
    <div>
      <Navbarr/>
      <Carousal/>
      <Cards/>
      <Fade/>
      
    </div>
  );

}
export default MainApp;