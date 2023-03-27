import { useState } from 'react'
import './App.css'
import data from'./assets/data.json'

function App() {
  const [input, setInput] = useState(null)

  

  const getComment = (e) => {
    e.preventDefault()
  }
  return (
    <div className="container">
      <div className='comment-area'>
        <div className='aside'>
          <span>+</span>
          <span>12</span>
          <span>-</span>
        </div>
        <div className='comment-output'>
          <div className='top'>
            <img className='img-reply' src="/images/avatars/image-juliusomo.png" alt="" />
            <b className='name'>Amyrobson</b>
            <span>1 month ago</span>
            <span className='reply-btn'><img src="/images/icon-reply.svg" alt="" />&nbsp;&nbsp;<b>Reply</b></span>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, et recusandae dignissimos in non porro libero, voluptas ipsum dolore fuga enim praesentium doloribus perferendis explicabo unde, culpa animi est. Aliquid.</p>
        </div>
      </div>
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
