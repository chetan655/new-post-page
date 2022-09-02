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
          className='radioBtn-1'
          type='radio'
          name='Post Type'
          value='Questions'
          onClick={() => setPost(false)}
        />Question

        <input
          className='radioBtn-2'
          type='radio'
          name='Post Type'
          value='Articles'
          onClick={() => setPost(true)}
        />Article

      </div>

      <div className='postFooter'>
          <p>What do you want to ask or share</p>
      </div>

      {post === false && <Questions />}
      {post === true && <Articles />}

    </div>
  );
}
export default Post;