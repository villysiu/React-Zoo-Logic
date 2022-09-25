const games=[
    {
        id: 1,
        header: [{animalId:2, count:1}, {animalId:3, count:1}, {animalId:1, count:1},
                 {animalId:2, count:1}, {animalId:3, count:1}, {animalId:1, count:1}],
        board: [0,0,0,0,0,0,0,0,0],
        fixed: [0],
    },
    {
        id: 2,
        header: [{animalId:2, count:1}, {animalId:3, count:1}, {animalId:1, count:1},
                 {animalId:2, count:2}, {animalId:1, count:2},{animalId:3, count:3}],
        board: [0,0,0,0,0,0,0,0,0],
        fixed: [],
    },
    {
        id: 3,
        header: [{animalId:2, count:1}, {animalId:3, count:1}, {animalId:1, count:1},
                {animalId:3, count:2}, {animalId:0, count:0},{animalId:1, count:1}],
        board: [0,0,0,0,1,0,0,0,0],
        fixed: [4],
    },
    {
        id: 4,
        header: [{animalId:2, count:1}, {animalId:3, count:1}, {animalId:1, count:1},
                {animalId:3, count:2}, {animalId:1, count:2},{animalId:2, count:1}],
        board: [0,0,0,0,0,0,0,0,0],
        fixed: [],
    },
    {
        id: 5,
        header: [{animalId:3, count:2}, {animalId:2, count:2}, {animalId:1, count:1},
                {animalId:2, count:1}, {animalId:0, count:0},{animalId:1, count:1}],
        board: [0,0,0,3,0,0,0,0,0],
        fixed: [3],
    },
    // {
    //     id: 6,
    //     header: [{animalId:2, count:1}, {animalId:0, count:0}, {animalId:1, count:1},
    //             {animalId:3, count:2}, {animalId:2, count:2},{animalId:1, count:1}],
    //     board: [0,0,0,0,2,0,0,0,0],
    //     fixed: [4],
    // },
   

]

export const gameCount=()=>(games.length)

export function getGame(num) {
    return games.find(
      (game) => game.id === num
    );
}
