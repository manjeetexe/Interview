import React from 'react'
import logo from './../assets/N.png'

const AImsg = () => {
  return (
    <>
    <div className='flex gap-2'>
      <div className=' h-7 w-7 rounded-full overflow-hidden bg-purple-400'>
        <img className='h-full w-full object-cover' src={logo} alt="" />
      </div>
      <div className=' px-3 glass max-w-[32.4rem] rounded-2xl'>
          <h1>Hello, I'm an AI!</h1>
          <p>I'm here to help you with your interview questions.</p>
          <button>Ask me a question</button>
          <p>lorem20</p>
      </div>

    </div>
    
    </>
  )
}

export default AImsg