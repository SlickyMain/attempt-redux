import { CREATE_COMMENT } from "../types";

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
        default: {
            return state
        }
    }
}