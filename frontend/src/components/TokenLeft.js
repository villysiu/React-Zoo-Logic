import { getUrl } from "./functions"

const TokenLeft =({tokenLeft})=>{
    console.log(tokenLeft)
    const TokenLeftDisplay =({animalId, count})=>{
        const {url, name}=getUrl(animalId)
        return (
            <>
                <img src={url} alt={name} width='55px' height='55px'/> : {count}
            </>
        )
    }
    return (
        <tr><td colSpan="4">
            {tokenLeft.map((count, idx)=><TokenLeftDisplay key={idx} animalId={idx+1} count={count}  /> )}          
        </td></tr>
    )
}
export default TokenLeft