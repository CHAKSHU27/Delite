import React, { Component } from "react";
import './Contact.css';
//import delite1 from './delite2.png';
class Contact extends Component
{
    render()
    {
      return (
          
      <div>
      <title>Contact V10</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/*===============================================================================================*/}
      <link rel="icon" type="image/png" href="images/icons/favicon.ico" />
      {/*===============================================================================================*/}
      <link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css" />
      {/*===============================================================================================*/}
      <link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css" />
      {/*===============================================================================================*/}
      <link rel="stylesheet" type="text/css" href="vendor/animate/animate.css" />
      {/*===============================================================================================*/}
      <link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css" />
      {/*===============================================================================================*/}
      <link rel="stylesheet" type="text/css" href="vendor/animsition/css/animsition.min.css" />
      {/*===============================================================================================*/}
      <link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css" />
      {/*===============================================================================================*/}
      <link rel="stylesheet" type="text/css" href="vendor/daterangepicker/daterangepicker.css" />
      {/*===============================================================================================*/}
      <link rel="stylesheet" type="text/css" href="css/util.css" />
      <link rel="stylesheet" type="text/css" href="css/main.css" />
      {/*===============================================================================================*/}
      <div className="container-contact100">
        <div className="wrap-contact100">
          <form className="contact100-form validate-form">
            <p className="contact100-form-title">
              Send Us A Message
            </p>
            <div className="wrap-input100 validate-input" data-validate="Please enter your name">
              <input className="input100" type="text" name="name" placeholder="Full Name" />
              <span className="focus-input100" />
            </div>
            <div className="wrap-input100 validate-input" data-validate="Please enter your email: e@a.x">
              <input className="input100" type="text" name="email" placeholder="E-mail" />
              <span className="focus-input100" />
            </div>
            <div className="wrap-input100 validate-input" data-validate="Please enter your phone">
              <input className="input100" type="text" name="phone" placeholder="Phone" />
              <span className="focus-input100" />
            </div>
            <div className="wrap-input100 validate-input" data-validate="Please enter your message">
              <textarea className="input100" name="message" placeholder="Your Message" defaultValue={""} />
              <span className="focus-input100" />
            </div>
            <div className="container-contact100-form-btn">
              <button className="contact100-form-btn">
                
                  <i className="fa fa-paper-plane-o m-r-6" aria-hidden="true" />
                  Send
               
              </button>
            </div>
          </form>
        </div>
      </div>
      <div id="dropDownSelect1" />
      {/*===============================================================================================*/}
      {/*===============================================================================================*/}
      {/*===============================================================================================*/}
      {/*===============================================================================================*/}
      {/*===============================================================================================*/}
      {/*===============================================================================================*/}
      {/*===============================================================================================*/}
      {/* Global site tag (gtag.js) - Google Analytics */}
    </div>
      )
    }
}
export default Contact;