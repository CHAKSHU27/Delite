import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import './rest.css';

export default class Rest extends Component
{
    constructor(props){
      super(props)
    this.state={
        restName:"",
        address:"",
        city:"",
        state:"",
        firstName:"",
        lastName:"",
        email:"",
        number:"",
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
      const {restName,firstName,lastName,city,state,email,number,address,error}=this.state
      const Rest={
        restName,
        address,
        city,
        state,
        firstName,
        lastName,
        email,
        number,
        error
      };
      this.restDetails(Rest).then(data=>{
        if(data.error) this.setState({error:data.error});
        else this.setState({
          error:"",
          restName:"",
          address:"",
          city:"",
          state:"",
          firstName:"",
          lastName:"",
          email:"",
          number:"",
          open:true
        });
      })
    }

    restDetails=(Rest)=>{
      return fetch("http://localhost:2709/restaurant-details",{
        method:"POST",
        headers:{
          Accept:"application/json",
          "Content-type":"application/json"
        },
        body:JSON.stringify(Rest)
      })
      .then(response=>{
        return response.json() 
      })
      .catch(err=>console.log(err))
    }

        
    render()
    {
      if(!localStorage.getItem('jwt'))
        {
          return (
            <div>
              {alert("Login required")}
              <Redirect to="/"></Redirect>
            </div>
          );
        }
        const { restName,firstName,lastName,city,state,email,number,address ,error,open} = this.state
          return (
               <div>
              <div className="loginbox">
                <h1 className='mt-5 mb-5'><b>Add A Restaurant</b></h1>
              <div className="alert alert-primary" style={{display:error?"":"none"}}>
                    {error}
              </div>
              <div className="alert alert-info" style={{display:open?"":"none"}}>
               Restaurant Added Successfully.
             </div>
              <form >
                 <p>Restaurant Name</p>
                  <input onChange={this.handleChange("restName")} type="text" className="form-control" placeholder="Restaurant Name" value={restName}/>
                  <p>Address</p>
                  <input onChange={this.handleChange("address")}  type="text" className="form-control" placeholder="Enter Exact Address" value={address} />
                  <p>City</p>
                  <input onChange={this.handleChange("city")}  type="text" className="form-control" placeholder="Enter City" value={city} />
                  <p>State</p>
                  <input onChange={this.handleChange("state")}  type="text" className="form-control" placeholder="Enter State" value={state} />
                  <p>First Name</p>
                  <input onChange={this.handleChange("firstName")}  type="text" className="form-control" placeholder="Enter First Name" value={firstName} />
                  <p>Last Name</p>
                  <input onChange={this.handleChange("lastName")}  type="text" className="form-control" placeholder="Enter Last Name" value={lastName} />
                  <p>Mobile Number</p>
                  <input onChange={this.handleChange("number")}  type="text" className="form-control" placeholder="Enter Number" value={number} />
                  <p>Email</p>
                  <input onChange={this.handleChange("email")}  type="text" maxLength="20" className="form-control" placeholder="Enter Email" value={email} />
                  <input onClick={this.clickSubmit} className="button" type="submit" value="Add Restaurant" />
              </form>
            </div>
            </div>
          );
    }
  }  
