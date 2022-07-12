import React, { Component } from 'react';

class Counter  extends Component {
    state = { 
        count: 0

     };
    render() { 
        return (
            // use react fragment to avoid  too  many divs 
        <React.Fragment>
            <h1>Hello React Js</h1>
            <hr />
           
            <span>{ this.countexpresion()}</span>
           
            <br />
            <button class="btn btn-primary">Add</button>
           
        </React.Fragment>
        );
    }
    countexpresion(){
        return this.state.count === 0? <h5>Zero</h5>: this.state.count;
    }
}
 
export default Counter ;