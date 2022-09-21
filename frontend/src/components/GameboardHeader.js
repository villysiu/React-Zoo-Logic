
import { getUrl } from './functions'

const GameboardHeader=({animalId, count})=>{

    const {animal, url}=getUrl(animalId)
    return (
        <>

        {count}
         <img src={url} width='80px' height='80px' alt={animal}></img>
     
        </>
    )
}
export default GameboardHeader