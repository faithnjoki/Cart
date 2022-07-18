import React, { Component } from 'react';

class Counter  extends Component {
    state = { 
        count: 0,
        imageUrl: 'https://cdn.pixabay.com/photo/2017/12/11/15/34/lion-3012515__340.jpg',
        lists : ['Banana','Orange','Lemon','Avocado','Pawpaw']

     };
    render() { 
        return (
            // use react fragment to avoid  too  many divs 
        <React.Fragment>
            <h1 style= { {fontWeight: 'bold'} }>Hello React Js</h1>
            <hr />
           
            <span className= {this.getbadgeclass()}>{ this.countexpresion()}</span>
           
            <br /> <br />
            <button className="btn btn-primary ">Add</button>
            <br /><br />
            <img src={this.state.imageUrl} alt="" />
            <br /><br />
            <p>listing in react</p>
            {/*lists in react using map method*/}
            <ul>
                {this.state.lists.map(list =>  <li key={ list }> {list} </li>)}
            </ul>
          
        </React.Fragment>
        );
    }
    // method 2
    getbadgeclass(){
        let classes = 'btn btn-'
        classes += this.state.count===0 ? 'warning':'primary';
        return classes;

    }

     // method 1
    countexpresion(){
        return this.state.count === 0? <h5>Zero</h5>: this.state.count;
    }
}
 
export default Counter ;