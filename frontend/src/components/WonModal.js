import { Modal, Button } from "react-bootstrap";
import { gameCount } from "./data/games";
const WonModal=({show, setShow, gid})=>{
    const gamecount=gameCount()
    console.log(gid, gamecount)
    console.log(typeof(gid), typeof(gamecount))
console.log(parseInt(gid)===gamecount)
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
                    <Button href="/games/1" >Play again?</Button>
                    </>
                :
                <Button href={"/games/"+(parseInt(gid)+1)} >Next Game</Button>   }         
            </Modal.Footer>
            </Modal>
        </>
    )
}
export default WonModal