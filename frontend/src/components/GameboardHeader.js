
import { getUrl } from './functions'

const GameboardHeader=({animalId, count})=>{

    const {animal, url}=getUrl(animalId)
    return (
        <>

        {count}
         <img src={url} width='60px' height='60px' alt={animal}></img>
     
        </>
    )
}
export default GameboardHeader