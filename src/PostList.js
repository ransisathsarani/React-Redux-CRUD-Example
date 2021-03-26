import React, { Component} from 'react';

import './App.css';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import EditComponent from './EditComponent';

class PostList extends Component{
    render(){
        return(
    <div>
      <h2 className="App">Category List</h2>
      {this.props.posts.map((post) => (
                    <div key={post.id}>
                        {post.editing ? <EditComponent post={post} key={post.id} /> :
                            <PostForm key={post.id} post={post} />}
                    </div>
                ))}    </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}

export default connect(mapStateToProps)(PostList);