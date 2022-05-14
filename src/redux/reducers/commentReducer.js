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
            return {
                ...state,
                comments: state.comments.filter(comment => comment.id !== action.id)
            }
        default: {
            return state
        }
    }
}