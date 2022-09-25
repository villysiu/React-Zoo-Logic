import { useParams, Outlet, Navigate } from "react-router-dom";
import { gameCount } from "./data/games";
const GameRoute =({currUserLevel})=>{
    const params = useParams();
    const paramGameId=parseInt(params.gameId, 10) 
    const gamecount= gameCount()    
    if(paramGameId<=gamecount)
        return (
        <>
        {   paramGameId>(currUserLevel+1) ? 
                <Navigate to={"games/"+(currUserLevel+1)} /> : <Outlet /> }
        </>
        )
    return (
        <>
        {  currUserLevel===gamecount? 
                <Navigate to="/gamelist" /> :
                <Navigate to={"/games/"+(currUserLevel+1)} /> }
        </>
    )
}
export default GameRoute