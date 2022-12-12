type ChangeThemeIdACType = {
    type: 'SET_THEME_ID'
    id: number
}

const initState = {
    themeId: 1,
}
type StateType = {
    themeId: number
}
type ActionTYpe = ChangeThemeIdACType
export const themeReducer = (state = initState, action: ActionTYpe): StateType => { // fix any
    switch (action.type) {
        case "SET_THEME_ID":
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number): any => ({ type: 'SET_THEME_ID', id }) // fix any
