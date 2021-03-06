import fnv from 'fnv-plus'
import fs from 'fs'

import Result from '../interfaces/Result'
import Results from '../interfaces/Results'

let results: Results = {}

const key = (description: string, timestamp: Date) => {
    let hash = fnv.hash(description + timestamp)
    return hash.str()
}

// maybe should go somewhere else. this loads json file into results at boot instead of using dummy data
export const Load = (path: string): boolean => {
    let data = fs.readFileSync(path)

    try {
        results = JSON.parse(data.toString())
        return false
    } catch (err) {
        console.error('could not read file at: ' + path)
        console.log(err)
        return true
    }
}

/*
export const GetResult = (description: string): Result => {
    const k = key(description, new Date()) 
    const result = results[k]

    if (result == null) {
        console.error('Could not find result with description' + description)
    } 
}
*/

export const GetResults = (): Results => {
    if (results == null || Object.keys(results).length == 0) {
        console.error('no results to respond with')
    }

    return results
}

export const StoreResult = (result: Result): Result => {
    const k = key(result.description, new Date())

    if (results[k]) {
        console.error('result already exists')
        return result
    }

    results[k] = result
    return result
}

/*
let dummyResult: Result = {
    id: 0,
    description: 'turn off bake',
    fullName: 'Check that heating elements aren\'t active after stop cook request is sent',
    failedExpectations: [
        {
            matcherName: 'cookmode',
            message: 'this is an example message',
            stack: '__',
            passed: false,
            expected: 'cookmode.none',
            actual: 'cookmode.bake'
        }
    ],
    passedExpectations: [],
    deprecationWarnings: [],
    pendingReason: '',
    status: 'fail',
    duration: 3,
}

results[key('turn off bake', new Date())] = dummyResult
*/