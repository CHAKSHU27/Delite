import React ,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
//import {Navbar,Nav} from 'react-bootstrap';
import './navi.css';
class Navi extends Component
{
    render(){
        return (
            <header className="toolbar">
              <nav className="toolbar-nav">
                <div className="toolbar-logo"><b>DELITE</b></div>
                <div className="spacing"/>
                <div className="toolbar-items">
                  <ul>
                    <li><b><a href="/log">Login</a></b></li>
                    <li><b><a href="/sign">SignUp</a></b></li>
                  </ul>
                </div>
              </nav>
            </header>     
        );
    }
}   
                
    

export default Navi;
