import {reducer, StateType, TOGGLE_COLLAPSED} from './reducer';

test('collapsed should be TRUE', () => {
    //data
    const state: StateType = {
        collapsed: false
    }

    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    //expectation
    expect(newState.collapsed).toBe(true)
})


test('collapsed should be FALSE', () => {
    //data
    const state: StateType = {
        collapsed: true
    }

    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    //expectation
    expect(newState.collapsed).toBe(false)
})


test('Fake action type throws Error', () => {
    //data
    const state: StateType = {
        collapsed: true
    }

    //action
    //expectation
    expect(() => {
        reducer(state, {type: 'FARE ACTION TYPE'})
    }).toThrowError()
})