console.log("Moikka moi!")

const express = require('express')
const app = express()
app.listen(3000, () => console.log("kuuntelen http://localhost:3000"));
app.use(express.static("public"));
