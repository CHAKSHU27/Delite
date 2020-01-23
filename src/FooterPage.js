import React,{Component} from "react";
//import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './index.css';
import img from './components/images/slide3.jpg';
import img2 from './components/images/slide1.jpg';
import img3 from './components/images/slide2.jpg';
import img4 from './components/images/slide4.jpg';
import img5 from './components/images/slide5.jpg';
import img6 from './components/images/slide7.jpg';
import 'bootstrap/dist/css/bootstrap.css';
class FooterPage extends Component{
    render()
    {
      return (
        <footer  className="page-footer font-small unique-color-dark lighten-3 pt-4">
          <div className="container-fluid text-center text-md-left">
           <div className="row">
           <div className="col-lg-2 col-md-12 mb-4">
        <div className="view overlay z-depth-1-half">
          <img src={img} className="img-fluid"
            alt=""/>
          <a href="">
            <div className="mask rgba-white-light"></div>
          </a>
        </div>
        </div>

      <div className="col-lg-2 col-md-6 mb-4">
        <div className="view overlay z-depth-1-half">
          <img src={img3} className="img-fluid"
            alt=""/>
          <a href="">
            <div className="mask rgba-white-light"></div>
          </a>
        </div>
      </div>

      <div className="col-lg-2 col-md-6 mb-4">
        <div className="view overlay z-depth-1-half">
          <img src={img2} className="img-fluid"
            alt=""/>
          <a href="">
            <div className="mask rgba-white-light"></div>
          </a>
        </div>
      </div>

      <div className="col-lg-2 col-md-12 mb-4">
        <div className="view overlay z-depth-1-half">
          <img src={img4} className="img-fluid"
            alt=""/>
          <a href="">
            <div className="mask rgba-white-light"></div>
          </a>
        </div>
      </div>

      <div className="col-lg-2 col-md-6 mb-4">
        <div className="view overlay z-depth-1-half">
          <img src={img5} className="img-fluid"
            alt=""/>
          <a href="">
            <div className="mask rgba-white-light"></div>
          </a>
        </div>
      </div>
     
      <div className="col-lg-2 col-md-6 mb-4">
        <div className="view overlay z-depth-1-half">
          <img src={img6} className="img-fluid"
            alt=""/>
          <a href="">
            <div className="mask rgba-white-light"></div>
          </a>
        </div>
        </div>

        <div className="col-md-3 mx-auto">
               <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Company</h5>
                <ul  className="list-unstyled"  id="hii">
                  <li>
                    <a href="/about">About Us</a>
                  </li><br/>
                  <li>
                    <a href="/policy">Our Policy</a>
                  </li><br/>
                  <li>
                    <a href="/contact">Contact Us</a>
                  </li><br/>
                </ul>
              </div>
            <hr className="clearfix w-100 d-md-none" />
              <div className="col-md-3 mx-auto">                
              </div>
            <hr className="clearfix w-100 d-md-none" />
              <div className="col-md-3 mx-auto">  
              </div>
            <hr className="clearfix w-100 d-md-none" />
              <div className="col-md-3 mx-auto">
              <footer className="page-footer font-small">{/* Footer Elements */}
                <div className="container">{/* Grid row*/}
                  <div className="row">{/* Grid column */}
                    <div className="col-md-6 py-5">
                      <div className="mb-5 flex-center">
                <a className="fb-ic">{/* Facebook */}
                  <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                </a>
                <a className="tw-ic">{/* Twitter */}
                  <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                </a>
                <a className="gplus-ic">{/* Google +*/}
                  <i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                </a>
                <a className="li-ic">{/*Linkedin */}
                  <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                </a>
                <a className="ins-ic">{/*Instagram*/}
                  <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                </a>
                <a className="pin-ic">{/*Pinterest*/}
                  <i className="fab fa-pinterest fa-lg white-text fa-2x"> </i>
                </a>
                    </div>
                  </div>{/* Grid column */}
                </div>{/* Grid row*/}
              </div>
            </footer> 
          </div>{/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
          <hr className="clearfix w-100 d-md-none" />
          {/* Footer Links */}
          <div className="container-fluid">
        {/* Call to action */}
        <ul className="list-unstyled list-inline text-center py-2">
          <li className="list-inline-item">
            <h5 className="mb-1">Register for free</h5>
          </li>
          <li className="list-inline-item">
            <a href="/sign" className="btn btn-outline-white btn-rounded">Sign up!</a>
          </li>
        </ul>
        {/* Call to action */}
      </div>
          {/* Copyright */}
          <div  className="footer-copyright text-center py-3" >© 2019 Copyright:
            <a href="#!"> Delite.com</a>
          </div>
          {/* Copyright */}
        </footer>
       
      );
    }
}

export default FooterPage;
// <MDBFooter color="black" className="font-small pt-4 mt-4">
    //   <MDBContainer fluid className="text-center text-md-left">
    //     <MDBRow>
    //       <MDBCol md="6">
    //         <h5 className="title">Links</h5>
    //         <ul>
    //           <li className="list-unstyled">
    //             <a href="#!">Contact Us</a>
    //           </li>
    //           <li className="list-unstyled">
    //             <a href="#!">About Us</a>
    //           </li>
    //           <li className="list-unstyled">
    //             <a href="#!">Register</a>
    //           </li>
    //           <li className="list-unstyled">
    //             <a href="#!">Login</a>
    //           </li>
    //         </ul>
    //       </MDBCol>
    //     </MDBRow>
    //   </MDBContainer>
    //   <div className="footer-copyright text-center py-3">
    //     <MDBContainer fluid>
    //       &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> Delite.com </a>
    //     </MDBContainer>
    //   </div>
    // </MDBFooter>