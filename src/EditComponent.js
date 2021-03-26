import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class EditComponent extends Component {
handleEdit = (e) => {
  e.preventDefault();
  const newName = this.getName.value;
  const data = {
    newName
  }
  this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
}
render() {
return (
<div className="App">
  <form onSubmit={this.handleEdit}>
    <input required type="text" ref={(input) => this.getName = input}
    defaultValue={this.props.post.name} placeholder="Enter Ctegory" /><br /><br />
    <button>Update</button>
  </form>
</div>
);
}
}
export default connect()(EditComponent);