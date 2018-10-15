import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {
  componentDidMount() {
    console.log(`fetching post`);
    this.props.fetchPost(this.props.match.params.id);
  }
  render() {
    console.log(`props: ${JSON.stringify(this.props)}`);
    console.log(this.props.match.params.id);
    const id = this.props.match.params.id;
    return (
      <div>
        Posts Show!
        <h1>{this.props.posts[id]? this.props.posts[id].title : ''}</h1>
      </div>
    )
  }
};


function mapStateToProps( {posts} ){
  return { posts };
};

export default connect(mapStateToProps, { fetchPost })(PostsShow);
