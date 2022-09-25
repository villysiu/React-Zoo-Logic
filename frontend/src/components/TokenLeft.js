import { getUrl } from "./functions"
import {Col} from 'react-bootstrap'
const TokenLeft =({tokenLeft})=>{
    
    const TokenLeftDisplay =({animalId, count})=>{
        const {url, name}=getUrl(animalId)
        return (
            <>
                <img src={url} alt={name} width='55px' height='55px'/> : {count}
            </>
        )
    }
    return (
        <>
            {tokenLeft.map((count, idx)=><Col key={idx} ><TokenLeftDisplay animalId={idx+1} count={count}  /></Col> )}          
        </>
    )
}
export default TokenLeft