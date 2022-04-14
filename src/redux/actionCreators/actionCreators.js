import { ADD_LIKE, REMOVE_LIKE, INPUT_DESC, CREATE_COMMENT } from "../types";

export function addLike() {
    return {
        type: ADD_LIKE //Лучше писать ADD_LIKE два раза, чем написать это один раз, но в кавычках)))
    }
}

export function removeLike() {
    return {
        type: REMOVE_LIKE
    }
}

export function inputDescription(value) {
    return {
        type: INPUT_DESC,
        value
    }
}

export function createComment(text, id) {
    return {
        type: CREATE_COMMENT,
        value: { text, id }
    }
}