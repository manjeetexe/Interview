import { useState } from 'react';
import Chat from './components/workarea';
import './App.css';

function App() {
  return (
    <>
       <div className=' px-3 justify-center items-center  flex gap-2 bottom-3 w-full h-screen  bg-black'>
          <Chat />
          
      </div>
    </>
  );
}

export default App;