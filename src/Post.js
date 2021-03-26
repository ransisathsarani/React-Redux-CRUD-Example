import React, { Component} from 'react';
import './Post.css';
import './App.css';
import {connect} from 'react-redux';
import { Button} from 'react-bootstrap';

class Post extends Component{

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e,"test")
    const name = this.getName.value;
    const data = {
      id: new Date(),
      name,
      editing:false
    }

    this.props.dispatch({
      type:'ADD_POST',
      data});
    this.getName.value = '';

    console.log(data)
  }
    render(){
        return(
    <div className="App">
      <h2>Add Category</h2>
      <form onSubmit={this.handleSubmit}>
        <input required type="text" ref={(input)=>this.getName = input} placeholder="Enter Category Name"/>
      

      <Button style={{marginLeft:10}} as="input" type="submit" value="Submit" />{' '}
      </form>
  
    </div>
        );
    }
}


export default connect()(Post);