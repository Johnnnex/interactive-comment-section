import { useState } from 'react'
import './App.css'
import data from'./assets/data.json'

function App() {
  const [input, setInput] = useState(null)
  // const [comments, setComments] = useState(data.comments)
  // const [comment, setComment] = useState('')
  // const [userComment, setUserComment] = useState('')
  // const [user, setUser] = useState(data.user)
  // const [isEditing, setIsEditing] = useState(false)
  // const [isDeleting, setIsDeleting] = useState(false)
  // const [isDeletingComment, setIsDeletingComment] = useState(false)
  // const [isDeletingUser, setIsDeletingUser] = useState(false)
  // const [isDeletingAll, setIsDeletingAll] = useState(false)
  // const [isDeletingAllComments, setIsDeletingAllComments] = useState(false)
  // const [isDeletingAllUsers, setIsDeletingAllUsers] = useState(false)
  // const [isDeletingAllCommentsAndUsers, setIsDeletingAllCommentsAndUsers] = useState(false)
  const userComment = data.comments.map(comment => ( (
    <section key={comment.id}>
      <div className='comment-area'>
        <div className='aside'>
          <span>+</span>
          <span>{comment.score}</span>
          <span>-</span>
        </div>
        <div className='comment-output'>
          <div className='top'>
            <img className='img-reply' src={comment.user.image.webp} alt="" />
            <b className='name'>{comment.user.username}</b>
            <span className='time-stamp'>{comment.createdAt}</span>
            <span className='reply-btn'><img src="/images/icon-reply.svg" alt="" />&nbsp;&nbsp;<b>Reply</b></span>
          </div>
          <p>{comment.content}</p>
        </div>
      </div>
      <div className='replies-container'>
      {comment.replies && comment.replies.map(reply => {
        return (
          <div key={reply.id}>
            <div className='comment-area'>
              <div className='aside'>
                <span>+</span>
                <span>{reply.score}</span>
                <span>-</span>
              </div>
              <div className='comment-output'>
                <div className='top'>
                  <img className='img-reply' src={reply.user.image.webp} alt="" />
                  <b className='name'>{reply.user.username}</b>
                  <span className='time-stamp'>{reply.createdAt}</span>
                  <span className='reply-btn'><img src="/images/icon-reply.svg" alt="" />&nbsp;&nbsp;<b>Reply</b></span>
                </div>
                <p>{reply.content}</p>
              </div>
            </div>
          </div>
        )
      })}
      </div>
        
    </section>
    )
  ))

  

  const getComment = (e) => {
    e.preventDefault()
  }
  return (
    <div className="container">
      {userComment}
      {userComment}
      <div className='text-area'>
        <img className='img-comment' src="/images/avatars/image-juliusomo.png" alt="" />
        <form onSubmit= {getComment}>
          <input type="text" 
          onChange={(e) => setInput(e.target.value)} 
          placeholder = "Add a comment ...."
          />
          <button type='submit'>SEND</button>
        </form>
      </div>
    </div>
  )
}

export default App
