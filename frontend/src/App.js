import './App.css';
import { React, useState, useEffect } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { getCurrUser } from './components/actions'

import Header from './components/Header'
import User from './components/User'
import GameList from './components/GameList';
import Game from './components/Game'
import Score from './components/Score'
import GameRoute from './components/GameRoute'
function App() {
   
    const [currUser, setCurrUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const token=localStorage.getItem('token')

    useEffect(()=>{
        getCurrUser(setCurrUser, setLoading)
    }, [token])
    if(!token && !loading)
        return(
            <div className="app">
                <User setCurrUser={setCurrUser} />
            </div>
        )
   
    return (
        
        <div className="app">
            { currUser? 
                <>
                <Header currUser={currUser} setCurrUser={setCurrUser} />
                <Routes>
                <Route exact path='/games/:gameId' element={<GameRoute currUserLevel={currUser.level}/>}>
                    <Route path="/games/:gameId" element={<Game currUserLevel={currUser.level}  />} />
                </Route>
                <Route path="/score" element={<Score />} />
                <Route path="/gamelist" element={<GameList currUserLevel={currUser.level} />} />
                <Route path="*" element={<Navigate to={"/games/"+(currUser.level+1)} replace />} />
                    
                </Routes>
                </>
            :
                <>Loading</>
            }
        </div>
        
    )
}

export default App;
