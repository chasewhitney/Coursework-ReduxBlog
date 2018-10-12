import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render(){
    console.log('post:', this.props.posts);
    return (
      <div>
        <h3>Posts</h3>
        <ul className="list-group">
          <li>what</li>
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ posts }) {
  return { posts };
}

// function mapDispatchToProps({fetchPosts}) {
//   return { fetchPosts }
// }
// Instead of using function, use { fetchPosts : fetchPosts }
// simplified to { fetchPosts }

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
