// import { useState } from 'react'
import './App.css'
import UseStorage from '../Hooks/UseStorage'
import { useEffect, useState } from 'react'

function App() {
  const [text , setText] = useState("")

  useEffect(()=>{
    setText(localStorage.getItem("text"))
  },[]);

  UseStorage(text)

  return (
    <>
     <div>
      <input type="text" onChange={(e)=> setText(e.target.value)} value={text}/>
    </div>
    </>
  )
}

export default App


