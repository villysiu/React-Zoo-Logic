import lion from './data/lion.png'
import zebra from './data/zebra.png'
import hippo from './data/hippo.png'

// hippo, lion, zebra
export const getUrl=(animalId)=>{

    switch (animalId) {
        case 1:
            return {id: 1, animal: "hippo", url: hippo}
        case 2:
            return {id: 2, animal: "lion", url: lion}
        case 3:
            return {id: 3, animal: "zebra", url: zebra}
        
        
        default:
            return {id: 0, animal: null, url: null}
    }
}
export const evalTokens=(board)=>{
    return(
        [
            3-board.filter(n=>n===1).length,
            3-board.filter(n=>n===2).length,
            3-board.filter(n=>n===3).length
        ]
    )
}
export const matchSolution =( currBoard, solution )=>{
    for(let i=0;i<solution.length;i++){
        if(currBoard[i]!==solution[i]) 
            return false
        
    }
    return true
}