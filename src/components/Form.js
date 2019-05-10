import React, { Component } from 'react';

class Form extends Component {
  // constructor
  constructor(props) {
    super(props);
    this.state = {

      description: "" // 2. has to be similar to input name

    }
  }

  handleonChange = e => {
    console.log(e.target.name, e.target.value) // 3. event has target and value 
    this.setState({
      // 4. { key : value } store change on key : change on value
      [e.target.name]: e.target.value
    })
  } 

  // render tampilan OOP ke frontend
  render() { 
    return ( 
      <div>
        <input 
        type="text" 
        placeholder="Todo" 
        name="description" // 1. 
        onChange = {this.handleonChange}
        />
        <button>Submit</button>
      </div> );
  }
}
 
export default Form;