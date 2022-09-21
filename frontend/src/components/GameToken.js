import { Col } from "react-bootstrap"
import { useState } from "react"
import { getUrl } from "./functions"
const GameToken=({ pos, animalId, checkBoard, tokenLeft})=>{
    
     const [animalObj, setAnimalObj]=useState(getUrl(animalId))

    const handleClick=(e)=>{
        e.preventDefault();
    
        let num=(animalObj.id+1)%4
        while(num!==0 && tokenLeft[num-1]===0){
                num=(num+1)%4
        }
        console.log(num)
        setAnimalObj(getUrl(num))
        document.getElementsByName(`som${pos}`)[0].value=(num)%4
    
         checkBoard()
        
    }
    if(animalId!==0){
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
            <input type="hidden" name={"som"+pos} value={animalObj.id} />
            {/* <input type="hidden" id="title" name="title" value={animalObj.id} /> */}
            <div className="circle" onClick={handleClick}>
                {animalObj.id===0 ? null :
                    <img  src={animalObj.url} alt={animalObj.animal} />
                }                
            
            </div>
        </Col>
    )
    
}
export default GameToken