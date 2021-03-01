const { response } = require('express');
const express = require('express');

const app = express();

const port = 8000;

app.listen(port,() => {
  console.log('Server started on port: ' + port);
});

app.get("/", (request, response) =>{
    response.send("Authors API")
});

app.get("/authors/:id/", (request, response) =>{
    // if (request.params.id === "1") {
    //     response.send("Lawrence Nowell, UK");
    // } else if (request.params.id === "2") {
    //     response.send("William Shakespeare, UK");
    // } else if (request.params.id === "3"){
    //     response.send("Charles Dickens, US");
    // } else if (request.params.id === "4"){
    //     response.send("Oscar Wilde, UK");
    // } else{
    //     response.send("Authors API");
    // }


    const id = request.params.id;
    switch (id){
        case "1":
            response.send("Lawrence Nowell, UK");
            break;
        case "2" :
            response.send("William Shakespeare, UK");
            break;
        case "3" :
            response.send("Charles Dickens, US");
            break;
        case "4" :
            response.send("Oscar Wilde, UK");
            break;
        case "12133":
            response.send("The author with the ID 12133 does not exist");
        default:
            response.send("Authors API")
    }
})  



app.get("/authors/:id/books/", (request, response) =>{
    const id = request.params.id;
    switch (id){
        case "1":
            response.send("Beowulf");
            break;
        case "2" :
            response.send("Hamlet, Othello, Romeo and Juliet, MacBeth");
            break;
        case "3" :
            response.send("Oliver Twist, A Christmas Carol");
            break;
        case "4" :
            response.send("The Picture of Dorian Gray, The Importance of Being Earnest");
            break;
        default:
            response.send("Authors's books")
    }
});

app.get("/cars/", (request, response) => {
    response.send("Error");
})