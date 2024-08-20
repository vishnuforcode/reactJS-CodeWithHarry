// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import textForm from './components/Textform';
import Textform from './components/Textform';
import Alerts from './components/Alerts';

import {
  BrowserRouter ,
  Routes ,
  Route,
  Link
}from 'react-router-dom'
import Layout from './components/Layout';


function App() {  
  // this is a function based component // all this written is called jsx(html in face of javascript)//
  const [mode , setMode] = useState('light')
  const [alert ,setalert]= useState(null);


const showAlert =(message ,type)=>{
  setalert({
    msg:message,
    type:type 
  })
  setTimeout(() => {
    setalert(null)
  }, 2000);
}



 const  toggleMode =()=>{
    if ( mode==='light') {
      setMode('dark');
      document.body.style.backgroundColor = "#1b4772"
      showAlert("dark mode enabledd", "success")
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white"
      showAlert("light mode enabledd", "success")

    }
    
  }
  
 

  return (
   <>
  <BrowserRouter>
     <Navbar title='TextUtils' home='Home'/>
     <div className="container my-3 mx-7">

  <Routes>
  
  {/* <Alerts alert ={alert}/> */}
    <Route path='/' element={ <Textform heading = "enter text" mode = {mode} /> }/>
    <Route path='about' element ={<About/>}/>
    
  
 
  {/* <Navbar />  yaha props set nhi h to default  set honge */}
  </Routes>
  </div>
  </BrowserRouter>
   </>
  );
}

export default App;
