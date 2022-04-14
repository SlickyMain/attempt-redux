import { ADD_LIKE, REMOVE_LIKE } from "../types"

const initialState = {
    likes: 0
}

export const likesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LIKE: //А чо б просто не написать то же самое, но в кавычках?
            return {
                ...state,
                likes: state.likes + 1
            }
        case REMOVE_LIKE:
            return {
                ...state,
                likes: state.likes - 1
            }
        default:
            return state
    }
}