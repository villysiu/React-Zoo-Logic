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
        fixed: [0],
        solutions: [[2, 1,3,
                    1, 3, 2,
                    3,2,1]]
    },
    {
        id: 2,
        header: [{animalId:2, count:1}, {animalId:3, count:1}, {animalId:1, count:1},
                 {animalId:2, count:2}, {animalId:1, count:2},{animalId:3, count:3}],
        board: [0,0,0,0,0,0,0,0,0],
        fixed: [],
        solutions: [[2, 1,2, 1, 2, 1, 3, 3, 3], [2,2,1,1,1,2,3,3,3]]
    },
    {
      id: 3,
      header: [{animalId:2, count:1}, {animalId:3, count:1}, {animalId:1, count:1},
               {animalId:3, count:2}, {animalId:0, count:0},{animalId:1, count:1}],
      board: [0,0,0,0,1,0,0,0,0],
      fixed: [4],
      solutions: [[3,2,3, 1,1,2, 2,3,1], [2,3,3, 1,1,2, 3,2,1], [3,3,2,1,1,3,2,2,1]]
  },
  {
      id: 4,
      header: [{animalId:2, count:1}, {animalId:3, count:1}, {animalId:1, count:1},
              {animalId:3, count:2}, {animalId:1, count:2},{animalId:2, count:1}],
      board: [0,0,0,0,0,0,0,0,0],
      fixed: [],
      solutions: [[3,3,2, 1,2,1, 2,1,3],[3,2,3, 1,1,2, 2,3,1]]
  }
]

export const gameCount=()=>(games.length)

export function getGame(num) {
    return games.find(
      (game) => game.id === num
    );
  }