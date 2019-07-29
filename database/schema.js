const mongoose = require("mongoose");
const schema = mongoose.Schema

const Workers_schema = schema({
    email: {
       type : String,
       trim : true,
       required: true
    },
    password: {
        type : String,
        required : true
    }
})

