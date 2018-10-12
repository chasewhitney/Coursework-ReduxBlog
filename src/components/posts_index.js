import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render(){
    return (
      <div>
        Posts Index
      </div>
    )
  }
}

// function mapDispatchToProps({fetchPosts}) {
//   return { fetchPosts }
// }
// Instead of using function, use { fetchPosts : fetchPosts }
// simplified to { fetchPosts }

export default connect(null, { fetchPosts })(PostsIndex);
