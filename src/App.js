import logo from './logo.svg';
import './Components/Header';
import Header from './Components/Header';
import   './Components/Formulaire';
import Formulaire from './Components/Formulaire';
import { Button } from 'reactstrap';
import User from './Components/User';
import './Components/User'
import image from './Components/pro.jpg'
import './App.css'
import St from  './Components/States';
import Count from './Components/Count';




function App() {
  const handleName=(name)=>{
    alert(` Name of profile ${name}`);
  }
  return (
  <div className="App">
  < Header/>
  <Formulaire/>
   {/* <User  img ={image} name="Affaf" job='developper'  description="I am here to show you why react js is so powerful to build you're web applications. and why you bshould become a developer" handleName={handleName} />
  <br />
  <User img= {image} name="chahra" job='developper'  description="I am here to show you why react js is so powerful to build you're web applications. and why you bshould become a developer" handleName={handleName} />

   <St/> 

  <Count/> */}
  </div>
  );
 

  
}




export default App;
