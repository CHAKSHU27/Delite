import React, { Component } from "react";
import './logSign.css';
import {Redirect} from 'react-router-dom';
class Login extends Component
{
  constructor(props)
  {
    super(props);
    this.state={
      email:"",
      password:"",
      error:"",
      open:false
    }
  }
  
  handleChange=(name)=>(event)=>{
    this.setState({error:""})
    this.setState({[name]:event.target.value})
  }
  authenticate=(jwt,next)=>{
    if(typeof window!=="undefined"){
      localStorage.setItem("jwt",JSON.stringify(jwt))
      next();
    }
  }
  clickSubmit=event=>{
    event.preventDefault()
    const {email,password,error}=this.state
    const User={
      email,
      password,
      error
    };
    this.login(User).then(data=>{
      if(data.error) this.setState({error:data.error});
      else {
this.authenticate(data,()=>{
  this.setState({error:"",
  email:"",
  password:"",
  open:true
})
})
    }
    })
  }

  login=(User)=>{
    return fetch("http://localhost:2709/login",{
      method:"POST",
      headers:{
        Accept:"application/json",
        "Content-type":"application/json"
      },
      body:JSON.stringify(User)
    })
    .then(response=>{
      return response.json() 
    })
    .catch(err=>console.log(err))
  }

    render()
    {
      const{error,email,password,open}=this.state
      return (
                <div>
                  <div className="loginbox">
                    <h1 className='mt-5 mb-5'><b>Login Here</b></h1>
                    <div className="alert alert-primary" style={{display:error?"":"none"}}>
                    {error}
                    </div>
                    <div className="alert alert-info" style={{display:open?"":"none"}}>
                      Logged In Successfully. You can <a href="/">Continue</a>.
                    </div>
                    <form>
                      <p>Email</p>
                      <input onChange={this.handleChange("email")} type="text" className="form-control" placeholder="Enter Email" value={email}/>
                      <p>Password</p>
                      <input onChange={this.handleChange("password")} type="password" className="form-control" placeholder="Enter Password" value={password} />
                      <input onClick={this.clickSubmit} type="submit" value="Login" className="button"/>
                      <b>Don't have an account?</b>
                      <a href="/sign">Sign Up</a>
                    </form>
                  </div>
                </div>
              );
            }
          }
        
export default Login;