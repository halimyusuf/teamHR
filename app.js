const express = require('express');
const path = require('path');
const app = express();

require("./routes/route")(app)



const port = process.env.PORT || 3000
const server = app.listen(port, ()=> {
    console.log("App listening on port 3000")
})

module.exports = server;