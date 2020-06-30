import React ,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import img6 from './components/images/res1.webp';
import loc from './components/images/images.png';
import './body.css';
import Restraunts from './components/Restraunts'

class Body extends Component{

    constructor(props) {
        super(props);
        this.state = {
            resname: '',
            citys : null,
            cityname: null,
            latitude: null,
            longitude: null,
            redirectToSeach: false
        };
    }
    position = async () => {
        var  options = {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        };
        await navigator.geolocation.getCurrentPosition(
          position => this.setState({ 
            latitude: position.coords.latitude, 
            longitude: position.coords.longitude
          }),
          err => console.log(err),
          options
        );
      }
    onChangeHandler = () => {
        return async (e) => {
            const { value:cityname } = e.target;
            await this.setState({ cityname });
            
        }
    }

    handleSubmit = () => {
        return async (e) => {
            const { cityname } = this.state;

            const url = `https://developers.zomato.com/api/v2.1/locations?query=${cityname}`;
            const res = await fetch(url, {
                method: 'GET',
                headers: {
                    'user-key': 'ca11f3179ff24e27cd60c149e9ca900c',
                    'content-type':'application-json'
                }
            });
            const citys = await res.json();
            //console.log(citys);
            await this.setState({ citys: citys, redirectToSeach: true });

          
        }
    }

    render()
    {     
        if(this.state.citys && this.state.citys.location_suggestions.length !== 0){
            return <Restraunts lat={this.state.citys.location_suggestions[0].latitude} long={this.state.citys.location_suggestions[0].longitude} />
        }
        else if(this.state.latitude!=null&&this.state.longitude!=null)
        {
            return <Restraunts lat={this.state.latitude} long={this.state.longitude} />
          
        }
        else
            return (
                <div className="container-fluid">
                <div className="row">
                <div className="col-md-6">
                  <p className="quote"><span></span><br/>
                 <h3>Search for your favourite restaurants</h3><br/>
                 <form class="example" onSubmit={(e) => e.preventDefault()} >
                 <div className="flexContainer">
                 <a onClick={this.position} ><img src={loc} height="50" width="50"/></a>
                  <input type="text" 
                    placeholder="Search.." 
                    name="search"
                    onChange={this.onChangeHandler()}
                    />
                  <button type="submit" onClick={this.handleSubmit()}><b>Search</b></button>
                  </div>
                  </form>
                  <br/><br/>
                  <h2>Want To Promote Your Restaurant?</h2>
                  <a href="/addRestaurant" className="simple-text">Add Your Restaurant here.</a>
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