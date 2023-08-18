import React from 'react'
import Newsitem from './Newsitem'
import { useGlobalContext } from './context'

 function News() {
  const {text} = useGlobalContext()
  return (
    <div>
    <h2>Newsify {text?"- "+text:""}</h2>
      <Newsitem />
    </div>
  )
}

export default News