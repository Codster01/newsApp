import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useGlobalContext } from './context'
import {FaSearch} from 'react-icons/fa'
import img from './404.jpg'
export default function Newsitem() {
  const [para,setPara] = useState('');
  const [isClicked,setIsClicked] = useState(false);
  const {news,fetchData,text,setText} = useGlobalContext()
const key = "17d186ad441446a5a0eda268be8fef12"

  const handleChange = (event) =>{
    setText(event.target.value)


  }

  const submit = () =>{
    fetchData(text)
    setIsClicked(true)
    
   
  }
   




  return (
    <div className='container'>
    <input value={text} onChange={handleChange} placeholder='Search News' />
    <button onClick={submit}><FaSearch/></button>
    
    {news.map((singlenews)=>{
      
      const {title,urlToImage:image,content,url}=singlenews;
 

      return (
        
        <div className="card">
        
        <a href={url} target='_blank'> 
        <img src={!image?img:image} className='card-img' id='img'/>
        <div className='cardbody'>
            <h5>{title}</h5>
            <p className='content'>{content}</p>
        </div>
        </a>
    
            </div>)
    })}
    </div>     

    
  )
}
 