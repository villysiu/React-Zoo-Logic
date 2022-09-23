
import {memo } from 'react'
import { getUrl } from './functions'
const GameboardHeader=({animalId, count})=>{
    console.log("header too!!hahahahah")
    const {animal, url}=getUrl(animalId)
    if(animalId===0) 
        return null
    return (
        <>

        {count}
         <img  src={url} width='60px' height='60px' alt={animal}></img>
     
        </>
    )
}
export default memo(GameboardHeader) 