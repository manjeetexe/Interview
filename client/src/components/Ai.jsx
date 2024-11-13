import React from 'react'
import logo from './../assets/N.png'

const AImsg = (props) => {

  return (
    <>
    <div className='flex gap-2'>
      <div className=' h-7 w-7 rounded-full overflow-hidden bg-purple-400'>
        <img className='h-full w-full object-cover' src={logo} alt="" />
      </div>
      <div className=' px-3 glass max-w-[32.4rem] rounded-2xl'>
      {props.prompt}
      </div>

    </div>
    
    </>
  )
}

export default AImsg