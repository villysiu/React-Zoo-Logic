
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

// const Gameboard=(props, ref )=>{
//     const {board,checkBoard, } = props
//     return(
//         <Container fluid>
//             <form ref={ref} >
//             <Row>
//                 {board.map((animalId, idx)=><GameToken key={idx} pos={idx} animalId={animalId} checkBoard={checkBoard} tokenLeft={tokenLeft}/> )}
                
//             </Row></form>
//         </Container>
//     )
// }
// export default forwardRef(Gameboard);