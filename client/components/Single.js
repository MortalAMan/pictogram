import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';
// import comments

const Single = React.createClass({
  render() {
    // index of the post
    const i = this.props.posts.findIndex((post) => post.code === 
      this.props.params.postId);
    const post = this.props.posts[i];
    // get us the post
    return (
      <div className='single'>
        <Photo i={i} post={post} {...this.props} />
      </div>
    )
  }
});

export default Single;
    