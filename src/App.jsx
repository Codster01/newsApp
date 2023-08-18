import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import News from './News'
import {Appprovider} from './context'
import NextPrev from './NextPrev'
function App() {
  return(
    <div>
    <Navbar />
    <News />
    <NextPrev />
</div>  ) 
}

export default App
