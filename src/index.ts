import express from 'express'
require('log-timestamp')

import { GetResultHandler, GetResultsHandler } from './handlers/Get'
import { StoreResultHandler } from './handlers/Post'
import { Load } from './data/Store'
import { exit } from 'process'

const notAbleToLoad = Load('./test.json')

if (notAbleToLoad) {
    exit()
}

const app = express()
const port = 3000

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

app.get('/api/result', GetResultsHandler)
app.get('/api/result/:id', GetResultHandler)
app.post('/api/result/:id', StoreResultHandler)

app.listen(port, () => {
    console.log('server starting on port ' + port)
})