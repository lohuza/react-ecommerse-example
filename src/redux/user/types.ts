export interface UserState {
    currentUser: object;
}

export const SET_CURRENT_USER = 'SET_CURRENT_USER'; 

interface SetCurrentUserAction {
    type: typeof SET_CURRENT_USER,
    payload: UserState
};

export type UserActionTypes = SetCurrentUserAction;