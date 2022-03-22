import * as actionTypes from './actionTypes';

const localStorageUser = JSON.parse(localStorage.getItem('user'));

const initialState = {
    user: localStorageUser ? localStorageUser : {}
};

export default function appReducer(state = initialState, action) {
    switch(action.type) {
        case actionTypes.CHANGE_USER:
            return {
                ...state,
                user: action.payload.user
            }
        default:
            return state;
    }
}