import React from 'react';
import Post from './Post';
import './styles/App.css'

function App(){
  return(
  <div className="app-div">
      <p className='app-header'>New Post</p>
      <Post />
  </div>);
}

export default App
