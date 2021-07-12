const express = require("express");
const app = express();
const port = 3000;

app.get("/" ,(req,res) => {
    res.write("<h1>Welcome to my home page</h1>");
    res.write("<h1>Welcome to my home page again</h1>");
    res.send();
});


app.get("/about", (req,res) => {
    res.send("Welcome to my about us page");
});
 
app.get("/contact" ,(req,res) => {
    res.send("Welcome to my contact us page");
});

app.get("/temp" , (req,res) => {
    //res.send("Welcome to my temp page");
    res.send([
        {
            id : 1,
            name: "Mira",
        },

        {
            id : 2,
            name: "Hemakashi",
        },

        {
            id : 3,
            name: "Dipali",
        },
    ]);
});

app.listen(port, () => {
    console.log(`listing port at ${port}`);
});