import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGame } from "../data/games.js";
import GameboardHeader from "./GameboardHeader.js";
import Gameboard from './Gameboard'
import TokenLeft from './TokenLeft'
import WonModal from "./WonModal.js";
import {  matchSolution, evalTokens } from "./functions.js";
import { Button, Container, Row, Col }  from 'react-bootstrap'
import { updateScore } from "./actions.js";

const Game =({currUserLevel})=>{
    const params = useParams();
    const game=getGame(parseInt(params.gameId, 10))
    const [currboard, setCurrboard] = useState(game.board)
    const [tokenLeft, setTokenLeft] = useState(evalTokens(game.board))
    const [modalShow, setModalShow] = useState(false);

    useEffect(()=>{
        setTokenLeft(evalTokens(currboard))
        if(currboard.every(x=>x>0) && matchSolution(currboard, game.header)){
            setModalShow(true)
            if(currUserLevel<game.id)
                updateScore(1, game.id)
        }   

    },[currboard, game.header, game.id, currUserLevel])
    
    return (
        <Container>
            <WonModal show={modalShow} setShow={setModalShow} gid={params.gameId} />
            <Row>
                <Col xs={12} md={1}><h1>{game.id}</h1></Col>
                <Col xs={12} md={8} >
                <table className="game mx-auto" width="480x" height="480px" cellSpacing="0" cellPadding="0">
                    <thead>
                        <tr>
                            <th></th>
                            {game.header.slice(0,3).map((item, idx)=>
                            <th key={idx} style={{textAlign: "center"}}><GameboardHeader  {...item} /></th>)}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>
                            <table><tbody>
                            {game.header.slice(3).map((item,idx)=><tr key={idx}><th><GameboardHeader {...item} /></th></tr>)}                
                            </tbody></table>
                        </td>
                        <td colSpan="3">
                            <Gameboard currboard ={currboard} setCurrboard={setCurrboard} fixed={game.fixed} tokenLeft={tokenLeft} setTokenLeft={setTokenLeft} setModalShow={setModalShow} />
                        </td>
                        </tr>
                    </tbody>
                </table>
                </Col>
                <Col xs={12} md={3}>
                    <Container>
                        <Row xs={4} md={1} >         
                            <TokenLeft tokenLeft={tokenLeft} />
                            <Col ><Button onClick={()=>setCurrboard(game.board)} variant="success" >Reset </Button></Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}
export default Game