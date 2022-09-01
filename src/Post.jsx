import Questions from './Questions';
import Articles from './Articles';
import { React, useState } from 'react';
import './styles/Post.css'

function Post() {
  const [post, setPost] = useState();

  return (
    <div className='postSection'>

      <div className='radioBtns'>

        <p>Select type of Post:</p>

        <input
          className='options1'
          type='radio'
          name='Post Type'
          value='Questions'
          onClick={() => setPost(true)}
        />Question

        <input
          className='options2'
          type='radio'
          name='Post Type'
          value='Articles'
          onClick={() => setPost(false)}
        />Article

      </div>

      <div className='postFooter'>
          <p>What do you want to ask or share</p>
      </div>

      {post === true && <Questions />}
      {post === false && <Articles />}

    </div>
  );
}
export default Post;