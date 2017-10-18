# lab-vue-router


#Iteration 0: Set Up Your Server

Set up the fake API:

$ npm install -g json-server

$ json-server --watch db.json


This is the API spec you can use now:

get("/movies") = returns all movies

get("/movies/:id") = returns specific movie

post("/movies", info) = adds new movie

put("/movies/:id", info) = edits a movie with info

delete("/movies/:id") = deletes specific movie

Now your local server is listenting to server requestsm and you can focus on the client side!


#Iteration 1: Create Your Server to Make API Calls

Work on api.js file. This file will be our service, where we will write all our methods to make API calls.

Complete the different functions in the file to make the correct API calls.

Make sure these methods are making the correct calls to your server.


#Iteration 2: Routing

Use vue server to create the following routes:

/ = welcome page

/movies = list of all movie titles, as links to the specific movie page

/movies/:id = the specific movie info

/movies/new = a form to add a new movie


#Iteration 3: Patch It Together

Create links on every route/component, to allow the user to logically navigate across the app.


#Bonus

Improve user exprience with semantic success messages (for edit and add)

Style you forms

Happy Coding!



