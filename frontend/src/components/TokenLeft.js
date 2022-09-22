import { getUrl } from "./functions"
import {Col} from 'react-bootstrap'
const TokenLeft =({tokenLeft})=>{
    console.log("tokenLeft re renered too")
    const TokenLeftDisplay =({animalId, count})=>{
        const {url, name}=getUrl(animalId)
        return (
            <>
                <img src={url} alt={name} width='55px' height='55px'/> : {count}
            </>
        )
    }
    return (
        // <tr><td colSpan="4">
        <>
            {tokenLeft.map((count, idx)=><Col key={idx} ><TokenLeftDisplay animalId={idx+1} count={count}  /></Col> )}          
        {/* // </td></tr> */}
        </>
    )
}
export default TokenLeft