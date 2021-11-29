const express = require('express')
const mongoose = require('mongoose')
const app = express();
const PORT = process.env.PORT || 4000;

app.use(require("./Develop/public/exercise"))


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`)
})