import { useParams, Outlet, Navigate } from "react-router-dom";

const GameRoute =({currUserLevel})=>{
    const params = useParams();
    const paramGameId=parseInt(params.gameId, 10)
    return paramGameId>currUserLevel+1 ? <Navigate to={"games/"+(currUserLevel+1)} /> : <Outlet />
}
export default GameRoute