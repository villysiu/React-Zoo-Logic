// hippo, lion, zebra
const games = [
    {
        id: 1,
        header: [{animalId:2, count:1}, 
                {animalId:3, count:1}, 
                {animalId:1, count:1},
                 {animalId:2, count:1}, 
                 {animalId:3, count:1},
                 {animalId:1, count:1}],
        board: [2,0,0,0,0,0,0,0,0],
        solution: [2, 1,3,
                    1, 3, 2,
                    3,2,1]
    },
    {
        id: 2,
        header: [{animalId:2, count:1}, {animalId:3, count:1}, {animalId:1, count:1},
                 {animalId:2, count:2}, {animalId:1, count:2},{animalId:3, count:3}],
        board: [0,0,0,0,0,0,0,0,0],
        solution: [2, 1,2,
                   1, 2, 1,
                   3, 3, 3]
    }
]


export function getGame(num) {
    return games.find(
      (game) => game.id === num
    );
  }