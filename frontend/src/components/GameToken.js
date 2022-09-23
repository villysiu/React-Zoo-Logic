import { Col } from "react-bootstrap"
import { getUrl } from "./functions"

const GameToken=({ pos, animalId, setCurrboard, fixed, tokenLeft})=>{
    console.log("button re rebdered")


    const animalObj=getUrl(animalId)
   
    const handleClick=(e)=>{
        e.preventDefault();
        let num=(animalObj.id+1)%4
        while(num!==0 && tokenLeft[num-1]===0){
                num=(num+1)%4
        }        
        setCurrboard(prev=>[...prev.slice(0,pos), num, ...prev.slice(pos+1)] )
    }
    if(fixed.includes(pos)){
        return (
            <Col xs="4" style={{  height: '120px'}}>
                <div className="circle" >
                    <img  src={animalObj.url} alt={animalObj.animal} />
                </div>
            </Col>
        )
    }
    return(
        <Col xs="4" style={{  height: '120px'}}>
            <div className="circle" onClick={handleClick}>
                {animalObj.id===0 ? null :
                    <img  src={animalObj.url} alt={animalObj.animal} />
                }                
            
            </div>
        </Col>
    )
}
export default GameToken