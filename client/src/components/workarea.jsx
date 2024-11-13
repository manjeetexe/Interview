import React, { useState,useEffect } from 'react'
import Text from './text'; 
import Chat from './chat';
const chat = () => {

  const [prompt, setPrompt] = useState('')
  const [UserMsg, setUserMsg] = useState([])

  



  useEffect(() => {
    if (prompt) {
      setUserMsg((prevMessages) => [...prevMessages, prompt]);
    }
  }, [prompt]);

  console.log(UserMsg);

  return (
    <>
        <div className='h-[90%] rounded-2xl w-full relative md:w-[65%] bg-[#2c2c2c7d] lg:w-[55%] '>
            <Chat UserMsg={UserMsg} />
            <Text prompt={prompt} setPrompt={setPrompt} />
        </div>
    </>
  )
}

export default chat