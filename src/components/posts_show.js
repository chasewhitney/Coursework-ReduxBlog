import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';


class PostsShow extends Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }
  render() {

    return (
      <div>
        Posts Show!
        <h1>{this.props.post ? this.props.post.title : ''}</h1>
      </div>
    )
  }
};


function mapStateToProps({posts}, ownProps){
  const { id } = ownProps.match.params;
  return { post: posts[id] };
};

export default connect(mapStateToProps, { fetchPost })(PostsShow);
