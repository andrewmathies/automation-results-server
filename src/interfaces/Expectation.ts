export default interface Expectation {
    matcherName: string
    message: string
    stack: string
    passed: boolean
    expected: string
    actual: string
}