import {Container, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {gameCount} from '../data/games'

const GameList =({currUserLevel})=>{
    
    const gamecount= gameCount() 
       
    const GameLink=({gameId})=>{
        if(gameId>currUserLevel+1)
            return (<Col>Game {gameId}</Col>)
        return (<Col><Link to={"/games/"+gameId} >Game {gameId}</Link></Col>)
    }
    return (
        <Container>
            <Row xs={1} sm={2}>
                {[...Array(gamecount).keys()].map((_, idx)=><GameLink key={idx} gameId={idx+1}/>) }
            </Row>
        </Container>
    
    )
}
export default GameList