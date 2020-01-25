import React, { Component } from 'react'
import './logSign.css';
export default class Sign extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      name:"",
      email:"",
      phone:"",
      password:"",
      error:"",
      open:false
    }
  }
  handleChange=(name)=>(event)=>{
    this.setState({error:""})
    this.setState({[name]:event.target.value})
  }
  clickSubmit=event=>{
    event.preventDefault()
    const {name,email,phone,password,error}=this.state
    const User={
      name,
      email,
      phone,
      password,
      error
    };
    this.signup(User).then(data=>{
      if(data.error) this.setState({error:data.error});
      else this.setState({
        error:"",
        name:"",
        email:"",
        phone:"",
        password:"",
        open:true
      });
    })
  }

  signup=(User)=>{
    return fetch("http://localhost:2709/signup",{
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


    render() {
      const{error,name,phone,email,password,open} = this.state
        return (
            <div>
                  <div className="loginbox">
                    <h1 className='mt-5 mb-5'><b>SignUp Here</b></h1>
                    <div className="alert alert-primary" style={{display:error?"":"none"}}>
                    {error}
                </div>

                <div className="alert alert-info" style={{display:open?"":"none"}}>
                  Account Created!! Please <a href="/log">Login</a> to continue.
                </div>
                    <form>
                      <p>Username</p>
                      <input onChange={this.handleChange("name")} type="text" className="form-control" placeholder="Enter Username" value={name}/>
                      <p>Email</p>
                      <input onChange={this.handleChange("email")} type="text" maxLength="20" className="form-control" placeholder="Enter Email" value={email}/>
                      <p>Phone Number</p>
                      <input onChange={this.handleChange("phone")} type="text" className="form-control" placeholder="Enter Phone Number" value={phone}/>
                      <p>Password</p>
                      <input onChange={this.handleChange("password")} type="password" className="form-control" placeholder="Enter Password" value={password}/>
                      <input onClick={this.clickSubmit} className="button" type="submit" value="create an account"/>
                    </form>
                  </div>
            </div>
        )
    }
}
