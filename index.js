const express = require("express");

const app = express();

const PORT = 3333;

app.use("/", (request, response) => {
    console.log(request.method);
    console.log(request.headers);
    console.log(request.url)
    response.end("Hello Wolrd");
});

app.listen(PORT, () => {  
    console.log("Api is running");
});  