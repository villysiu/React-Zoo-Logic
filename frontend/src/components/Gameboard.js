
import {Container, Row} from 'react-bootstrap'
import GameToken from './GameToken'
const Gameboard=(props )=>{
    const { currboard } = props
    return(
        <Container fluid>  
            <Row>
                {currboard.map((animalId, idx)=><GameToken key={idx} pos={idx} animalId={animalId} {...props} /> )}    
            </Row>
        </Container>
    )
}
export default Gameboard