import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import { Button} from 'react-bootstrap';

class PostForm extends Component {
  render() {
  return (
    <div className="App">
      <h4>{this.props.post.name}</h4>

      <button onClick={()=>this.props.dispatch({type:'EDIT_POST',id:this.props.post.id})}>Edit</button>
      <button style={{marginLeft:10}} onClick={()=>this.props.dispatch({type:'DELETE_POST',id:this.props.post.id})}>Delete</button>
    </div>
  );
 }
}
export default connect()(PostForm);