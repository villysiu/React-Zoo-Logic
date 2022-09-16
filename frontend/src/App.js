import './App.css';
import { useState } from 'react';
import Header from './components/Header'
import User from './components/User'
function App() {
  const [currUser, setCurrUser] = useState(null)
  return (
    <div className="app">
      <Header currUser={currUser} />
      <User setCurrUser={setCurrUser} />

    </div>
  );
}

export default App;
