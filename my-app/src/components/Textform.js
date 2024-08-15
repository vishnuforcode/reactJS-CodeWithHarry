import React , {useState} from 'react'  // useState is a hook

export default function Textform(props) {
  const [text, setText] =  useState("enter text here")
  
  
  const handleonChange = (event)=>{
    // console.log("on change is working")
    setText(event.target.value)
  }

const handleonClick = ()=>{
  const newText = text.toUpperCase()
  setText(newText) ;
}

  return (
    <div>
     

<div className="mb-3">
  <h1>{props.heading}</h1>
  <textarea className="form-control" id="mybox" value={text} onChange={handleonChange}  rows="8"  ></textarea>  
</div>
<button className="btn btn-primary" onClick={handleonClick}>Convert to UpperCase</button>

    </div>
    
  )
}
