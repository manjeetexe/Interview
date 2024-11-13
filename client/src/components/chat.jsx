import React from 'react';
import User from './User'; // Assuming User component is here

const Chat = ({ UserMsg }) => {
  return (
    <div className='px-3 py-3 w-full h-[92%]'>
      <div className='scroller h-full w-full flex flex-col gap-2 text-white rounded-xl overflow-y-auto'>
        {/* Map over UserMsg array to display each message */}
        {UserMsg.map((msg, index) => (
          <User key={index} prompt={msg} /> // Pass each message as a prop to User component
        ))}
      </div>
    </div>
  );
};

export default Chat;