import React , {useState} from 'react'  // useState is a hook
import { Link } from 'react-router-dom'

export default function Textform(props) {
  const [text, setText] =  useState("")
  
  
  const handleonChange = (event)=>{
    // console.log("on change is working")
    setText(event.target.value)
  }

const handleonClick = ()=>{
  const newText = text.toUpperCase()
  setText(newText) ;
}
const handleonClick2 = ()=>{
  const newText = text.toLowerCase()
  setText(newText) ;
}
const handleonCon = ()=>{
  const newText = text.concat("Hello")
  setText(newText)
  
}
// const Reset =(event)=>{
//   const newText = text
//     setText(newText);
// }

  return (
    <>
    <Link to={'/'} >
    <div>
     

<div className="mb-3" style={{color :props.mode === 'dark' ? 'white': 'black'
}}>
  <h1>{props.heading}</h1>
  <textarea className="form-control" id="mybox" value={text} onChange={handleonChange}  rows="8" style={{background:  props.mode === 'dark' ? 'gray': 'white' ,color :props.mode === 'dark' ? 'white': 'black' }}></textarea>  
</div>
<button className="btn btn-primary " onClick={handleonClick}>Convert to UpperCase</button>
<button className="btn btn-danger mx-3" onClick={handleonClick2}>Convert to LowerCase</button>
{/* <button className="btn btn-secondary " onClick={Reset}>Reset</button> */}
<button className="btn btn-danger mx-3" onClick={handleonCon}>ConCateWithHello</button>

    </div>
<div className="conatiner my-3" style={{color :props.mode === 'dark' ? 'white': 'black' }}>
    <h1>Your text Summary </h1>
    <p> characters= {text.length}
       <br />
       words = {text.split(" ").length}
    </p>
    
    <p>{0.008 * text.split(" ").length}approx. - minutes time to read this</p>
    <h2>Preview</h2>
    <p>{text}</p>
    </div>
    </Link>
    </>
  )
}
