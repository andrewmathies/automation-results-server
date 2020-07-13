import { GetResults, StoreResult } from '../data/Store'
import { Request, Response } from 'express'

export const GetResultHandler = (req: Request, res: Response) => {
    console.log('Recieved request for result with id: ', req.params.id)
    res.status(200).json()
}

export const GetResultsHandler = (req: Request, res: Response) => {
    console.log('Recieved request for all results')
    const results = GetResults()
    res.status(200).json(results)
}