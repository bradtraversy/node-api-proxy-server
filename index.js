const express = require('express')
const cors = require('cors')

const app = express()

// Enable cors
app.use(cors())

// Routes
app.use('/api', require('./routes'))

app.listen(5000, () => console.log(`Server running on port 5000`))