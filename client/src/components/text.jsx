import React, { useState } from 'react';
import { LuSendHorizonal } from "react-icons/lu";

const TextComponent = (props) => {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);  // Track the loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const prompt = input;
    props.setPrompt(input);
    setInput('');
    // Set the prompt in parent component, if needed

    setIsLoading(true);  // Set loading to true when the request is sent

    try {
      const res = await fetch('http://localhost:3000/sendData', { // Assuming '/sendData' is your backend endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });
  
      if (res.ok) {
        const data = await res.json();
        props.setresponse(data.message)  
      } else {
        console.error('Error: ', res.statusText);
      }
    } catch (error) {
      console.error('Error contacting backend:', error);
    } finally {
      setIsLoading(false);  // Reset the loading state after the request is finished
    }

      // Reset the input field after submission
  };

  return (
    <form onSubmit={handleSubmit} className='flex gap-3 items-center absolute bottom-3 w-full px-3'>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className='h-12 px-3 rounded-2xl border-[1px] text-white bg-[#524f4f22] border-gray-400 w-full'
        placeholder="Enter your prompt here"
        disabled={isLoading}  // Disable input while loading
      />
      <button
        type='submit'
        className='h-[2.7rem] w-[2.7rem] px-3 bg-red-500 flex justify-center items-center rounded-full'
        disabled={isLoading}  // Disable the button while loading
      >
        <LuSendHorizonal className='text-2xl' />
      </button>
    </form>
  );
};

export default TextComponent;