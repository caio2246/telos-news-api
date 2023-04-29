const express = require("express");

const app = express();

const PORT = 3333;

const authors = [];

app.use(express.json());

app.get("/authors", (request, response) => {
    response.json(authors);
});


app.post("/authors", (request, response) => {
    const { id, biography, name, email, password, createAt, modifiedAt  } = request.body;

    const author = {
     id,
     biography,
     name,
     email,
     password,
     createAt,
     modifiedAt,
    };

authors.push(author);

response.json(author);
});

app.get("/authors/:id", (request, response) => {
    const { id }= request.params;

    const author = authors.find((u) => u.id = id);

    response.json(author)
});


app.put("/authors/:id", (request, response) => {
    const id = request.params.id;
    const { biography, name, email, password, creatAt, modifiedAt } = request.body
    
    const authorIndex = authors.findIndex(u => u.id = id);

if(authorIndex < 0){
    response.end("Usuário não encontrado");
}
    const authorUpdated = {
    biography,
    name,
    email,
    password,
    createdAt,
    modifiedAt,
    }

    authors[authorIndex] = authorUpdated;

    response.json(authorUpdated);
});

app.listen(PORT, () => {  
    console.log("Api is running");
});  