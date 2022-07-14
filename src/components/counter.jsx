import React, { Component } from 'react';

class Counter  extends Component {
    state = { 
        count: 0,
        imageUrl: 'https://cdn.pixabay.com/photo/2017/12/11/15/34/lion-3012515__340.jpg',

     };
    render() { 
        return (
            // use react fragment to avoid  too  many divs 
        <React.Fragment>
            <h1 style= { {fontWeight: 'bold'} }>Hello React Js</h1>
            <hr />
           
            <span>{ this.countexpresion()}</span>
           
            <br />
            <button className="btn btn-primary m-2">Add</button>
            <br /><br />
            <img src={this.state.imageUrl} alt="" />
           
        </React.Fragment>
        );
    }
    countexpresion(){
        return this.state.count === 0? <h5>Zero</h5>: this.state.count;
    }
}
 
export default Counter ;