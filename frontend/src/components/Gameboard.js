
import {Container, Row} from 'react-bootstrap'
import GameToken from './GameToken'
const Gameboard=(props )=>{
    const {board,setCurrboard, fixed, tokenLeft } = props
    return(
        <Container fluid>  
            <Row>
                {board.map((animalId, idx)=><GameToken key={idx} pos={idx} animalId={animalId} setCurrboard={setCurrboard} fixed={fixed} tokenLeft={tokenLeft}/> )}    
            </Row>
        </Container>
    )
}
export default Gameboard