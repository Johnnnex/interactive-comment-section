import { useState } from 'react'
import './App.css'
import data from'./assets/data.json'

function App() {
  const userComment = data.comments.map(comment => ( (
      <div key={comment.id} className='comment-area'>
        <div className='aside'>
          <span>+</span>
          <span>{comment.score}</span>
          <span>-</span>
        </div>
        <div className='comment-output'>
          <div className='top'>
            <img className='img-reply' src={comment.user.image.webp} alt="" />
            <b className='name'>{comment.user.username}</b>
            <span>{comment.createdAt}</span>
            <span className='reply-btn'><img src="/images/icon-reply.svg" alt="" />&nbsp;&nbsp;<b>Reply</b></span>
          </div>
          <p>{comment.content}</p>
        </div>
      </div>
    )
  ))
  

  const getComment = (e) => {
    e.preventDefault()
  }
  return (
    <div className="container">
      {userComment}
      {/* <div className='text-area'>
        <img src="/images/avatars/image-juliusomo.png" alt="" />
        <form onSubmit= {getComment}>
          <input type="text" 
          onChange={(e) => setInput(e.target.value)} 
          placeholder = "Add a comment ...."
          />
          <button type='submit'>SEND</button>
        </form>
      </div> */}
    </div>
  )
}

export default App
