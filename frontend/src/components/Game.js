import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { getGame } from "./data/games.js";
import GameboardHeader from "./GameboardHeader.js";
import Gameboard from './Gameboard'
import TokenLeft from './TokenLeft'
import { evalTokens, matchSolution } from "./functions.js";
const Game =()=>{
    
    const params = useParams();
    const game=getGame(parseInt(params.gameId, 10))
    const [tokenLeft, setTokenLeft] = useState(evalTokens(game.board))

    
    const formRef=useRef()
    const checkBoard=()=>{
        const formData = new FormData(formRef.current);
        const data=Object.fromEntries(formData)
        const currBoard=Object.values(data).map(x=>parseInt(x))
        console.log(currBoard)
        setTokenLeft(evalTokens(currBoard))
        if(matchSolution(currBoard, game.solution))
            console.log("you won")
    }
    return (
        <div>
            <table width="480x" height="480px" cellSpacing="0" cellPadding="0">
            <thead><tr>
                <td><h2>GAME {game.id}</h2></td>
                {game.header.slice(0,3).map((item, idx)=><td key={idx} align="center"><GameboardHeader  {...item} /></td>)}
            </tr></thead>
            
            <tbody>
                <tr>
                <td>
                    <table><tbody>
                    {game.header.slice(3).map((item,idx)=><tr  key={idx}><td><GameboardHeader {...item} /></td></tr>)}                
                    </tbody></table>
                </td>
                <td colSpan="3">
                    <Gameboard board ={game.board} checkBoard={checkBoard} ref={formRef} tokenLeft={tokenLeft} />
                </td>
                </tr>
            </tbody>
            <tfoot><TokenLeft tokenLeft={tokenLeft} /></tfoot>
            </table>
        </div>
        
    )
}
export default Game