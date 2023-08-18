import React from 'react'
import { useGlobalContext } from './context'
import Navbar from './Navbar';
function NextPrev() {
    const {fetchData,text} = useGlobalContext();
    const Prev = () =>{
        fetchData(text,0)
        
    }
    const Next = () =>{
        fetchData(text,1)
      
    }
  return (


    <div className="buttons">
      <button onClick={Prev} className='btn1'>Prev</button>
      <button onClick={Next} className='btn2'>Next</button>
    </div>
  )
}

export default NextPrev