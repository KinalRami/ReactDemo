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
      <User email={"kinalrami@gmail.com"}/>
      <button onClick={()=>update()}>Save</button>
    </div>
  );
}

export default App;
