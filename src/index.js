import express from 'express'
import opbeat from './opbeat'
import crash from './handlers/crash'

const app = express()

app.get('/crash', crash)

app.use(opbeat.middleware.express())

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
