import React, {useState} from 'react';
import User from './components/User';
import './App.css';

function App() {
  const [data,setData] = useState("Peter");
  function update(){
    setData("John");
  }
  return (
    <div className="App">
      <h1>Hello {data} </h1>
      <User email={"peter@gmail.com"}/>
      <button onClick={()=>update()}>Update</button>
    </div>
  );
}

export default App;
