import React, { useState,useEffect } from 'react'
import Text from './text'; 
import Chat from './chat';
const chat = () => {

  const [prompt, setPrompt] = useState('')
  const [UserMsg, setUserMsg] = useState([])


  const [response, setresponse] = useState('')
  const [AiMsg, setAiMsg] = useState([])



  useEffect(() => {
    if (prompt) {
      setUserMsg((prevMessages) => [...prevMessages, prompt]);
    }
  }, [prompt]);

  console.log(UserMsg);


  useEffect(() => {
    if (response) {
      setAiMsg((prevMessages) => [...prevMessages, response]);
    }
  }, [response]);

  console.log(AiMsg);

  return (
    <>
        <div className='h-[90%] rounded-2xl w-full relative md:w-[65%] bg-[#2c2c2c7d] lg:w-[55%] '>
            <Chat UserMsg={UserMsg} AiMsg={AiMsg}/>
            <Text prompt={prompt} setPrompt={setPrompt} setresponse={setresponse} />
        </div>
    </>
  )
}

export default chat