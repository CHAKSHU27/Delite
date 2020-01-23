import React ,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import img6 from './components/images/res1.webp';
import './body.css';
class Body extends Component{
    render()
    {     
            return (
                <div className="container-fluid">
                <div className="row">
                <div className="col-md-6">
                  <p className="quote"><span></span><br/>
                 <h3>Search for your favourite restaurants</h3><br/>
                 <form class="example" action="/action_page.php">
                  <input type="text" placeholder="Search.." name="search"/>
                  <button type="submit"><b>Search</b></button></form>
                  <br/><br/>
                  <h2>Want To Promote Your Restaurant?</h2>
                  <a href="/log" className="simple-text">Add Your Restaurant here.</a>
                 </p>
                </div>
                <div className="col-md-6">
                <img src={img6} alt="test" className="img-responsive"  height="400px" width="650px"  />
                </div>
                </div>
                </div>
            );
        }
    }
export default Body;