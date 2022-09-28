import './App.css';
import background from "./data/forest_bg.png";
import { React, useState, useEffect } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import { getCurrUser } from './components/actions'

import Header from './components/Header'
import User from './components/User'
import GameList from './components/GameList';
import Game from './components/Game'
import Score from './components/Score'
import About from './components/About'
import GameRoute from './components/GameRoute'

const App=()=>{

    const [currUser, setCurrUser] = useState(null)
    const [loading, setLoading] = useState(true)
    
    useEffect(()=>{
        if(localStorage.getItem('tokenExpiredAt')>Date.now())
            getCurrUser(setCurrUser, setLoading)
        else{
            localStorage.removeItem('token')
            localStorage.removeItem('tokenExpiredAt')
            setCurrUser(null)
            setLoading(false)
        }
    }, [setCurrUser])

   if(loading)
    return(
        <div><Spinner animation="border" variant="success" /> </div>
    )
    return ( 
        <div className="app" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover',}}>
            <Header currUser={currUser} setCurrUser={setCurrUser} />
            <br/><br/><br/>
            
            <Routes>
                <Route path="/score" element={<Score />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Navigate to="/" replace />} /> 
                {currUser? <>
                    <Route exact path='/games/:gameId' element={<GameRoute currUserLevel={currUser.level}/> }>
                        <Route path="/games/:gameId" element={<Game currUser={currUser}  />} />
                    </Route>
                    <Route path="/gamelist" element={<GameList currUserLevel={currUser.level} />} /> 
                    <Route path="/" element={<Navigate to={"/games/"+(currUser.level+1)} replace />} />         
                </>
                :
                <><Route path="/" element={<User setCurrUser={setCurrUser}/>} /> </>
                }
            </Routes>

        <br/><br/><br/>
       </div>

    )
    }

export default App;
