import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGame } from "./data/games.js";
import GameboardHeader from "./GameboardHeader.js";
import Gameboard from './Gameboard'
import TokenLeft from './TokenLeft'
import WonModal from "./WonModal.js";
import { evalTokens, matchSolution } from "./functions.js";
import { Button } from "react-bootstrap";
const Game =()=>{
    
    const params = useParams();
    const game=getGame(parseInt(params.gameId, 10))
    const [tokenLeft, setTokenLeft] = useState(evalTokens(game.board))
    const [modalShow, setModalShow] = useState(false);
    const [currboard, setCurrboard] = useState(game.board)
    
    useEffect(()=>{
        console.log(currboard)
        setTokenLeft(evalTokens(currboard))
        if(matchSolution(currboard, game.solution)){
            console.log("you won")
            setModalShow(true)
        }    
    },[currboard, game.solution])
    return (
        <div>
            <WonModal show={modalShow} gid={params.gameId} />
            <table width="480x" height="480px" cellSpacing="0" cellPadding="0">
            <thead><tr>
                <td><h4>GAME {game.id}</h4></td>
                {game.header.slice(0,3).map((item, idx)=><td key={idx} align="center"><GameboardHeader  {...item} /></td>)}
            </tr></thead>
            
            <tbody>
                <tr>
                <td>
                    <table><tbody>
                    {game.header.slice(3).map((item,idx)=><tr key={idx}><td><GameboardHeader {...item} /></td></tr>)}                
                    </tbody></table>
                </td>
                <td colSpan="3">
                    <Gameboard board ={currboard} setCurrboard={setCurrboard} fixed={game.fixed} tokenLeft={tokenLeft} />
                </td>
                </tr>
            </tbody>
            <tfoot>
                <TokenLeft tokenLeft={tokenLeft} />
                <tr><td> <Button  onClick={()=>setCurrboard(game.board)} >Reset </Button> </td></tr>

            </tfoot>
            </table>
        </div>
        
    )
}
export default Game