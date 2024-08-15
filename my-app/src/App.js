// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform'
function App() {  // this is a function based component // all this written is called jsx(html in face of javascript)
  return (
   <>
  <Navbar title = "TextUtils" about = "About" home="Home" />
  {/* <Navbar />  yaha props set nhi h to default  set honge */}
  
  <div className="container my-3 " >
  <Textform heading = "enter text"/>
  </div>
     
   </>
  );
}

export default App;
