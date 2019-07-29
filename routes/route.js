const routes = require("./routers")
const express = require("express")
const bodyParser = require("body-parser")

module.exports = function(app) {
    app.use("/", routes)
    app.use(express.json())
    app.use(bodyParser({urlencoded:true, extended: true}))
}
