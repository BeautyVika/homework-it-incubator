import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => {
    switch (action.type) {
        case 'sort':
            const names = state.map(el => {
                return {...el}
            })
            return action.payload === 'up'
                ? names.sort((a,b) => a.name > b.name ? 1 : -1)
                : names.sort((a,b) => a.name < b.name ? 1 : -1)
        case 'check':
            return state.filter(el => el.age >= 18)
        default:
            return state
    }
}
