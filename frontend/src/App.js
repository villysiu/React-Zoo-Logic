import './App.css';
import { React, useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { getCurrUser } from './components/actions'

import Header from './components/Header'
import User from './components/User'
import GameContainer from './components/GameContainer';
import Game from './components/Game'
import Score from './components/Score'
import NotFound from './components/NotFound'


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
            <>
                <Routes>
                  <Route path="games" element={<GameContainer />} > 
                      <Route path=":gameId" element={<Game />} />
                  </Route>
                  <Route path="score" element={<Score />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
            </>
            : 
                <User setCurrUser={setCurrUser} />
            }

        </div>
    );
}

export default App;
