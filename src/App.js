import logo from './logo.svg';
import './App.css';
import Person from './Components/Person';
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    fetch(`./Apijson.json`)
    .then(res=>res.json())
    .then(data=>console.log(data));
  },[])
  
  return (
    <div >
      <Person></Person>
    </div>
  );
}

export default App;
