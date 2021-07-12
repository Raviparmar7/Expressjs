const express = require("express");
const app = express();

// app.get(route ,callback);
app.get("/", (req, res) => {
    res.send(" Hello from the express");
});

app.get("/about", (req,res) => {
    res.send("Hello from the about us");
});

app.listen(8000 , () => {
    console.log("listing port at 8000");

});


// We mostly use express is creating routing and API.