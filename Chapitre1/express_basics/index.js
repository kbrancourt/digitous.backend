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

//afficher les auteurs+nationalités

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
        case "12133": //message d'erreur qd l'auteur n'est pas défini
            response.send("The author with the ID 12133 does not exist");
        default:
            response.send("Authors API")
    }
})  


//afficher les livres par auteur
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

//message d'erreur qd les routes n'existent pas
app.get("/cars/", (request, response) => {
    response.send("Error");
})

//créer une variable contenant les auteurs + les livres
// et melangeant des arrays et des objets

///méthode de réponse : res.json() 	Envoie une réponse JSON.
//res.jsonp({ user: 'tobi' })
// => callback({ "user": "tobi" })


app.get("/json/authors/:id", (request, response) => {
    response.json(konexio[request.params.id])
})
let booksList = [   
    { author: "Lawrence Nowell", nationality:"UK", books:"Beowulf"},
    { author: "William Shakespeare", nationality:"UK",books:"Hamlet, Othello, Romeo and Juliet, MacBeth"},
    { author: "Charles Dicken", nationality:"US", book:"Oliver Twist, A Christmas Carol"},
    { author: "Oscar Wilde", nationality:"UK", books:"The Picture of Dorian Gray, The Importance of Being Earnest"},

]

