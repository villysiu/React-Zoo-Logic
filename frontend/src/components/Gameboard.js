
import {Container, Row} from 'react-bootstrap'
import GameToken from './GameToken'
const Gameboard=(props)=>{
    
    return(
        <Container fluid>  
            <Row>
                {props.currboard.map((animalId, idx)=><GameToken key={idx} pos={idx} animalId={animalId} {...props} /> )}    
            </Row>
        </Container>
    )
}
export default Gameboard