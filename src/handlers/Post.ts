import { StoreResult } from '../data/Store'
import { Request, Response } from 'express'
import Result from '../interfaces/Result'

export const StoreResultHandler = (req: Request, res: Response) => {
    const result: Result = req.body.result

    if (!result.description || !result.status || !result.failedExpectations || !result.passedExpectations) {
        // bad request
        console.error('recieved a request to store a result without neccesary data')
        res.status(400).json({})
    }

    const reflection = StoreResult(result)
    res.status(200).json(reflection)
}