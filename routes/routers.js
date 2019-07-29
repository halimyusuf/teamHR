const express = require("express")
const app = express()
const router = express.Router()
const controller = require("../controllers/routeControllers")
const control = new controller()

router.get("/", (control.login))



module.exports = router