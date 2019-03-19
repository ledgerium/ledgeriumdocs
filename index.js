const express = require('express');
const app = express()
const dotenv = require('dotenv').config()
port = process.env.PORT || 8000

app.use(express.static('./sphinx/nbuild/html'))
app.listen(port, () => console.log(`Doc server listening on port ${port}!`))