import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import { Button} from 'react-bootstrap';

class Restraunts extends Component {

    constructor(){
        super();
    this.state = {
        resturants: [],
        loading:true
    }
}
    async componentDidMount() {
        const { lat, long } = this.props;
        const url = `https://developers.zomato.com/api/v2.1/search?lat=${lat}&lon=${long} `;
        const res = await fetch(url, {
            method: 'GET',
            headers: {
                'user-key': 'ca11f3179ff24e27cd60c149e9ca900c',
                'content-type':'application-json'
            }  
        });
        const resturants = await res.json();
        //console.log(resturants.restaurants);
        await this.setState({resturants:resturants.restaurants,loading:false});
    }
    
    change(){
        if(this.state.loading){
             return <h1>Loading...</h1>
        }
        else{
        
            return(<div className='row'>
            {this.state.resturants.map((shop) => {
                return <Card style={{ width: '18rem' }} className='col-md-4'>
                                             <Card.Body>
                                            <Card.Title>{shop.restaurant.name}</Card.Title>
                                           <img src={shop.restaurant.thumb} alt="Image not available"/>
                                             <hr/>
                                             <Card.Text>
                                                 Timings : <b>{shop.restaurant.timings} </b>
                                             </Card.Text>
                                             <Card.Text>
                                                 Type :  <b> {shop.restaurant.cuisines} </b>
                                                </Card.Text>
                                             <Card.Text>
                                                 Average cost for two :<b> {shop.restaurant.average_cost_for_two} Rs.</b>
                                            </Card.Text>
                                            <Card.Text>
                                                User Rating :<b>{shop.restaurant.user_rating.aggregate_rating}</b>
                                            </Card.Text>
                                            <hr/>
                                            <Button variant="primary" >Order Now</Button>
                                            </Card.Body>
                                            <br/>
                                        </Card>
                                
            })}</div>)
    }
}
    
    //<div> {shop.restaurant.name}<img src={shop.restaurant.thumb}/></div>
    render() {
            return (
            <div>
                <h1>Top Restaurants</h1>
                <div>
                    {this.change()}
                </div>
            </div>
    
        )
    }
}
//     //<div> {shop.restaurant.name}<img src={shop.restaurant.thumb}/></div>
//     render() {
//         return (
//             <div>
//                 <h1> Restraunts available </h1>
//                 <div className='row'>
//                     {this.state.resturants.map((shop) => {
//                         return  <Card style={{ width: '18rem' }} className='col-md-4'>
//                                                      <Card.Body>
//                                              <Card.Title>{shop.restaurant.name}</Card.Title>
//                                                    <img src={shop.restaurant.thumb} alt="Image not available"/>
//                                                      <hr/>
//                                                      <Card.Text>
//                                                          Timings : {shop.restaurant.timings}
//                                                      </Card.Text>
//                                                      <Card.Text>
//                                                          Type :   {shop.restaurant.cuisines}
//                                                  </Card.Text>
//                                                      <Card.Text>
//                                                          Average cost for two : {shop.restaurant.average_cost_for_two} Rs.
//                                                          User Rating :{shop.restaurant.user_rating.aggregate_rating}
//                                                      </Card.Text>
//                                                      <Button variant="primary">Order Now</Button>
//                                                      </Card.Body>
//                                                 </Card>
//                     })}
//                 </div>
//             </div>
  
//         )
//     }
// }


export default Restraunts;











