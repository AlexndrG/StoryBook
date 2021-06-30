export type ActionType = {
    type: string
}

export const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED'

////////////////////////////////////////////////////////////////////
//
// state - переделаем в объект
//

export type StateType = {
    collapsed: boolean
}

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            // const stateCopy = {...state}
            // stateCopy.collapsed = !state.collapsed
            // return stateCopy
            return {
                ...state,
                collapsed: !state.collapsed
            }
        default:
            throw new Error('Bad action type!')
    }
}


////////////////////////////////////////////////////////////////////
//
// state - boolean-примитв
//

/*
export const reducer = (state: boolean, action: ActionType) => {
    switch (action.type) {
        case TOGGLE_CONSTANT:
            return !state
        default:
            throw new Error('Bad action type!')
    }

    // if (action.type === TOGGLE_CONSTANT) {
    //     return !state
    // }
    //
    // return state
}
*/
