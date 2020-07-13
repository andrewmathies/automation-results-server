import fnv from 'fnv-plus'

import Result from './interfaces/Result'
import Results from './interfaces/Results'

const key = (description: string, timestamp: Date) => {
    let hash = fnv.hash(description + timestamp)
    return hash.str()
}

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

let results: Results = {}
results[key('turn off bake 7/9/20', new Date())] = dummyResult


console.log(results)