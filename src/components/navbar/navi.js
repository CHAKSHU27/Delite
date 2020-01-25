import React ,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
//import {Navbar,Nav} from 'react-bootstrap';
import './navi.css';
class Navi extends Component
{
  logout=()=>{
    if(typeof window!=='undefined') localStorage.removeItem('jwt');
    return fetch(`${process.env.REACT_APP_Host}/signout`,{
      method:"GET"
    })
    .then(response=>{
      console.log('signout',response);
      return response.json();
    })
    .catch(err=>console.log(err));
  }
    render(){
      if(!localStorage.getItem('jwt'))
        {
          return (
            <header className="toolbar">
              <nav className="toolbar-nav">
                <div className="toolbar-logo"><a href="/" style={{decoration:"none", color:"white", fontSize:"35px"}}>DELITE</a></div>
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
        else{
          return (
            <header className="toolbar">
            <nav className="toolbar-nav">
              <div className="toolbar-logo"><b>DELITE</b></div>
              <div className="spacing"/>
              <div className="toolbar-items">
                  <ul>
                    <li><b><a href="/" onClick={this.logout}>Logout</a></b></li>
                  </ul>
              </div>
            </nav>
          </header>
          );
        }
    }
}   
                
    

export default Navi;
