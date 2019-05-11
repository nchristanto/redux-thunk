import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions/todoAction";

class List extends Component {
  componentDidMount() {
    this.props.fetchData();
    // console.log(this.props) //untuk lihat data state di reducer
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        {this.props.todo_list.map((todo, index) => (
          <div key={index}>{todo.description}</div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todo_list: state.todo.todo_list
});

export default connect(
  // null,
  mapStateToProps,
  { fetchData }
)(List);
