const express = require("express");

app = express()

   

app.use(express.static("frontend"));

app.listen(8080, ()=> console.log("Server started") )

