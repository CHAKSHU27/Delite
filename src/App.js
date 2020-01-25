import React from 'react';
import Login from './Login.js';
import Sign from './sign.js';
import Navi from './components/navbar/navi.js';
import Body from './body.js';
import Aboutus from './aboutus.js';
import Contact from './Contact.js';
import Policy from './Policy.js';
import Rest from './Rest.js';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import FooterPage from './FooterPage.js';
function App() {
  return (
    <div className="App">
      <div style={{height:'100%'}}>
      <Router>
      <Navi/>
      
      <Route exact path='/' render={()=><Body/>}/>
      <Route exact path='/log' render={()=><Login/>}/>
      <Route exact path='/sign' render={()=><Sign/>}/>
      <Route exact path='/addRestaurant' render={()=><Rest/>}/>
      <Route exact path='/about' render={()=><Aboutus/>}/>
      <Route exact path='/contact' render={()=><Contact/>}/>
      <Route exact path='/policy' render={()=><Policy/>}/>
      <FooterPage/>
      </Router>
      </div>
    </div>
  );
}

export default App;
