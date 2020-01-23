import React ,{Component} from 'react';
import './policy.css';
import Slide from './components/images/slide3.jpg';
import khaman from './components/images/khaman.jpg';
import icecream from './components/images/icecream.jpg';
// import black from './black.jpg';
class Policy extends Component
{
    render()
    {
        return(
            
      <div className="p33">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css" />
      <div className="fullscreen nopadding">
        <center><h1 className="h22"><b>Our Policy</b></h1></center>
      </div>
      <img className="f1" src={icecream} align="left" />
      <img className="f1" src={khaman} align="right" />
      <div >
        
        <h1><center><font size="50"><b>Foodie Code of Conduct</b></font></center></h1>
        <p /><h5>If there's one thing we truly love, it's sharing in all the great foodie moments you have. Bouquets when the food exceeds your expectations, brickbats when the service is shocking, chronicles of your food excursions – they all count.
          While we welcome your opinions and descriptions of your dining experiences, there are a few things we expect from every user on Zomato. Your reviews and photos, as well as your profile and the comments you share, are all subject to Content Guidelines, our Foodie Code of Conduct.</h5><p />
          <br/>
          <br/>
      </div>
      <div className="fullscreen nopadding">
      <p align="left"><font size="10" color="green" ><b>Our Guidelines</b></font></p></div>
            <p align="left">
            <img className="f3" src={Slide} align="right" />
            <ul >
            <font size="5"><b>  
            <li >Keep out the clutter</li>
            <li>Keep it relevant </li>
            <li>Keep it fresh</li>
            <li>Keep it real </li>
            <li>Don't solicit </li>
            <li>Don't be a bully</li>
            </b></font>
            </ul>
        
              </p>
        <br />
        <br />
        <br /><br />
        <br />
        <br />
      
      
      
    </div>

        )
    }
}

export default Policy;
