import React from 'react'
import { useGlobalContext } from './context'
function Navbar() {
  const {fetchData} = useGlobalContext()


  const usa = () =>{
    fetchData("USA")
  }
  const tesla = () =>{
  fetchData("tesla")
  
  
}
const top = () =>{
  fetchData("Top")

}



  return (
    <div>
    <div className="nav">
        <h3>Newsify</h3>
        <ul>
            <li>Home </li>
            <li>About Us</li>
        </ul>
        <button onClick={top} className='btn'>Top News</button>
    <button onClick={tesla} className='btn'>Tesla</button>
    <button onClick={usa} className='btn'>USA</button>
    </div>
      
    </div>
  )
}

export default Navbar