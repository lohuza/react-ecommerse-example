import { stat } from "fs";
import { act } from "react-dom/test-utils";
import { SET_CURRENT_USER, UserActionTypes, UserState } from "./types";

const INITIAL_STATE: UserState = {
    currentUser: {}
};

const userReducer: UserState = (state = INITIAL_STATE, action: UserActionTypes) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                currentUser: {
                    ...state,
                    ...action.payload
                }
            };
    
        default:
            return state;
    }
};

export default userReducer;