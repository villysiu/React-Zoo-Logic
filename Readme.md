# Zoo logic

Zoo Logic is a sudoku like game for kids age 3 and up. Player place the animal tokesns onto corresponding positions on the board, according the the top row and left column requirement.

## Tech Stack
The backend was created with Rails API and has been fully set up with user authentication, using Devise gem and devise-JWT. The frontend was built with React, JavaScript, and HTML, with the design features being mostly done with React-Bootstrap.

## Getting Started
To start,  clone the git to you preferred editor.
There will be api and frontend in the folder.

Change into api folder 
``` cd api ```
then run 
``` bundle install ```
, then 
``` rails s ```
to start up the server. `http://localhost:3000` will open.
There is no photo in the app yet. You can wither signup and share photos by providing a link or you can close the server and run `db:seed` to preload photos and user login. 

Then change into frontend folder, `cd ..` followed by `cd frontend`, run `npm install`. After installing the modules, start up the server by running `npm start`. `http://localhost:3001` will open.