import { CREATE_COMMENT, DELETE_COMMENT } from "../types";

const initialState = {
    comments: []
}

export const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_COMMENT:
            return {
                ...state,
                comments: [...state.comments, action.value]
            }
        case DELETE_COMMENT:
            const commentIndex = state.comments.findIndex((elem) => elem.id === action.id)
            return {
                ...state,
                comments: [...state.comments.slice(0, commentIndex), ...state.comments.slice(commentIndex + 1)]
            }
        default: {
            return state
        }
    }
}