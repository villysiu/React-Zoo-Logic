require 'json'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
headerArr=[['lion', 1], ['zebra', 1], ['hippo', 1],
['lion', 1], ['zebra', 1], ['hippo', 1]]

boardArr=['','','','','','','','','']
solArr=['lion', 'hippo','zebra',
'hippo', 'zebra', 'lion',
'zibra','horse','hippo']

games = Game.create([
    {
        header: headerArr.to_json,
        board: boardArr.to_json,
        solution: solArr,
    },
    {
        header: [['lion', 1], ['zebra', 1], ['hippo', 1],
                 ['lion', 2], ['hippo', 2], ['zebra', 3]],
        board: ['','','','','','','','',''],
        solution: ['lion', 'lion','hippo',
                   'hippo', 'hippo', 'lion',
                   'zibra','zibra','zibra']
    }
])