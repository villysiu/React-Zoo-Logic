import { Modal, Button } from "react-bootstrap";
import { gameCount } from "../data/games";
import { Link } from "react-router-dom";
const WonModal=({show, setShow, gid})=>{
const gamecount=gameCount()
const next=parseInt(gid)+1
    return(
        <>
        <Modal show={show} onHide={() => setShow(false)} size="sm" aria-labelledby="contained-modal-title-vcenter" centered >
            <Modal.Body>
                <h4>You won! </h4>
                
            </Modal.Body>
            <Modal.Footer>
                {parseInt(gid)===gamecount ? 
                    <>
                    <p>You have completed all level.</p>
                    <Button as={Link} variant="success" to="/gamelist" onClick={e=>setShow(false)} >Play again?</Button>

                    </>
                :
                <>
                     <Button as={Link} variant="success" to={`/games/${next}`} onClick={e=>setShow(false)} >Next Game</Button> 
                </>
            }         
            </Modal.Footer>
        </Modal>
        </>
    )
}
export default WonModal