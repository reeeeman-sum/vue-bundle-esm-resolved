const express = require('express')
const path = require('path')
const cors = require('cors')
const compression = require('compression')

const app = express()
const PORT = 4000

app.use(cors())
app.use(compression())

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
