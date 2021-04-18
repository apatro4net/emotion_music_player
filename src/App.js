import './App.css';
import logo from './logo.png'
import {useState,useEffect} from 'react';
import MultiPlayer from './components/MultiPlayer';


function App() {
 
  const [emotion, setEmotion]= useState('Angry');
 
  useEffect(()=>{

    fetch('/emotion').then(res => res.json()).then(data =>{
      setEmotion(data.emotion);
    })
  },[]);



  return (
    
    <div className="App">
      <img className="logo" src={logo}/>
      <h2 className="heading2"> Maulana Azad National Institute of Technlogy(2018-22)</h2>
      {/* <h3 className="heading2"> Minor Project under guidence of Rajesh Wadhwani Sir.</h3> */}
      <h2 className="heading">We detected your emotion to be:  
      <span className="emotion"> {emotion} </span></h2>  
      <MultiPlayer emotion={emotion}/>
    </div>
  );
}

export default App;
