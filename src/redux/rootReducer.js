import { combineReducers } from "redux";
import { descriptionReducer } from "./reducers/descriptionReducer";
import { likesReducer } from "./reducers/likeReducer";
import { commentReducer } from "./reducers/commentReducer";


export const rootReducer = combineReducers(
    {
        likesReducer, 
        descriptionReducer,
        commentReducer, 
        
    }
)