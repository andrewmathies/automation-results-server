import Expectation from './Expectation'

export default interface Result {
    id: number
    description: string
    fullName: string
    failedExpectations: Array<Expectation>
    passedExpectations: Array<Expectation>
    deprecationWarnings: Array<Expectation>
    pendingReason: string
    status: string
    duration: number
}