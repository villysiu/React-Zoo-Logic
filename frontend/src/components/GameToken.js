import { Col } from "react-bootstrap"
import { getUrl } from "./functions"


const GameToken=({ pos, animalId, setCurrboard, fixed, tokenLeft, setTokenLeft})=>{
    const animalObj=getUrl(animalId)
   
    const handleClick=(e)=>{
        e.preventDefault();
        let currAnimalId=(animalObj.id+1)%4
        while(currAnimalId!==0 && tokenLeft[currAnimalId-1]===0){
            currAnimalId=(currAnimalId+1)%4
        }        
        setCurrboard(prev=>[...prev.slice(0,pos), currAnimalId, ...prev.slice(pos+1)])
    }

    return(
        <Col xs="4" style={{ height: '120px'}}>
            {
            fixed.includes(pos) ? 
                <div className="circle" style={{opacity: 0.6}}><img src={animalObj.url} alt={animalObj.animal} /></div> 
                : 
                <div className="circle" onClick={handleClick}>
                    {animalObj.id===0 ? null:<img  src={animalObj.url} alt={animalObj.animal} />}
                </div>
            }
        </Col>
    )
}
export default GameToken