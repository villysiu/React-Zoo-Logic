import './App.css';
import { useState, useEffect } from 'react';
import { getCurrUser } from './components/actions'
import Header from './components/Header'
import User from './components/User'
import Gameboard from './components/Gameboard';
function App() {
  const [currUser, setCurrUser] = useState(null)
  const token=localStorage.getItem('token')
  console.log(token)
  useEffect(()=>{
    token ? getCurrUser(setCurrUser) : setCurrUser(null)
  }, [token])
  return (
    <div className="app">
      <Header currUser={currUser} setCurrUser={setCurrUser} />
      {currUser? 
        <Gameboard /> 
        : 
        <User setCurrUser={setCurrUser} />
      }

    </div>
  );
}

export default App;
