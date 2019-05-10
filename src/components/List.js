import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchData } from "../actions/todoAction"

class List extends Component {
  componentDidMount(){}
  render() { 
    return ( 
    <div>
      <h1>Todo List</h1>
    </div>  
    );
  }
}

export default connect(
  null, 
  { fetchData }
)(List);