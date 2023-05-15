const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello, world!')
})

const port = process.env.PORT || 3000
app.set('address', '0.0.0.0')
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
