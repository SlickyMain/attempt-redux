import { INPUT_DESC } from "../types";

const initialState = {
    value: ""
}

export const descriptionReducer = (state = initialState, action) => {
    switch (action.type) {
        case INPUT_DESC:
            return {
                ...state,
                value: action.value
            }
        default: {
            return state
        }
    }
}