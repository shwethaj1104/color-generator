import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js' //Javascript library to get the tints and shades of a colour.


function App() {

  const [color,setColor] = useState('')
  const [error,setError] = useState(false)
  const [list,setList] = useState(new Values('#f15025').all(10))

  const handleSubmit=(e)=>{
    e.preventDefault();
    try {
      let colors = new Values(color).all(10)
      setList(colors)
    } catch (error) {
      setError(true);
      console.log(error)
    }
  }
  return (
    <>
    <section className='container'>
      <h3>Color Generator</h3>
      <form onSubmit={handleSubmit}>
        <input placeholder='#f15025' type='text' value={color} onChange={(e)=>setColor(e.target.value)} className={`${error ? 'error':null}`}></input>
        <button type='submit' className='btn'>Submit</button>
      </form>
    </section>
   
    <section className='colors'>
     {list.map((color,index)=>{
      return (<SingleColor key={index} {...color} index={index} hex={color.hex}/>)
     })}
    </section>
    </>
  )
}

export default App
