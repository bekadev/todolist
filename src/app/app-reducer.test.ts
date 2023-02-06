import {appReducer, InitialStateType, setAppErrorAC, setAppStatusAC} from "./app-reducer";

let startStete: InitialStateType

beforeEach(() => {
    startStete = {
        error: null,
        status: "idle",
        initialized: false
    }
})

test('correct error message should be set', () => {
    const endState = appReducer(startStete, setAppErrorAC('some error'))

    expect(endState.error).toBe('some error')
})

test('correct status should be set', () => {
    const endState = appReducer(startStete, setAppStatusAC('loading'))

    expect(endState.status  ).toBe('loading')
})