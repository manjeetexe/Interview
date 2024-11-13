import React from 'react';
import Profile from './../assets/profile.webp';

const User = (props) => {
  return ( 
    <div className='flex gap-2 justify-end'>
      <div className='px-3 glass max-w-[32.4rem] rounded-2xl'>
        {props.prompt} {/* Display the message */}
      </div>
      <div className='h-7 w-7 rounded-full overflow-hidden bg-purple-400'>
        <img className='h-full w-full object-cover' src={Profile} alt="Profile" />
      </div>
    </div>
  );
};

export default User;