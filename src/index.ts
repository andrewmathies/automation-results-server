import fnv = require('fnv-plus')
import { Result } = require('./result')

const key = (description: string, timestamp: Date) => {
    let hash = fnv.hash(description + timestamp)
    return hash.str()
}

let dummyResult = new Result(
    0, // id
    'turn off bake', //description
    'Check that heating elements aren\'t active after stop cook request is sent', //fullName
    [ //failedExpectations
        {
            matcherName: 'cookmode',
            message: 'this is an example message',
            stack: '__',
            passed: false,
            expected: 'cookmode.none',
            actual: 'cookmode.bake'
        }
    ],
    [], //passedExpectations
    [], //deprecationWarnings
    '', //pendingReason
    'fail', //status
    3, //duration
)

let results = {}
results[key('turn off bake 7/9/20', new Date())] = dummyResult



console.log('testaaa')