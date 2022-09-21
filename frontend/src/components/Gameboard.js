import { forwardRef } from "react";
import {Container, Row} from 'react-bootstrap'
import GameToken from './GameToken'
const Gameboard=(props, ref )=>{
    const {board,checkBoard, tokenLeft} = props
    return(
        <Container fluid>
            <form ref={ref} >
            <Row>
                {board.map((animalId, idx)=><GameToken key={idx} pos={idx} animalId={animalId} checkBoard={checkBoard} tokenLeft={tokenLeft}/> )}
                
            </Row></form>
        </Container>
    )
}
export default forwardRef(Gameboard);