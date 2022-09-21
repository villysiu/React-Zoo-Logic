import { Modal, Button } from "react-bootstrap";

const WonModal=({show, gid})=>{
    
    return(
        <>
        <Modal show={show} size="sm" aria-labelledby="contained-modal-title-vcenter" centered >
            <Modal.Body>
                <h4>You won! </h4>
                
            </Modal.Body>
            <Modal.Footer>
                <Button href={"/games/"+(parseInt(gid)+1)} >Next Game</Button>            
            </Modal.Footer>
            </Modal>
    </>
    )
}
export default WonModal