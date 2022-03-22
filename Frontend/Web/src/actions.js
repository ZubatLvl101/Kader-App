import * as actions from './actionTypes';

export const changeUser = user => ({
    type: actions.CHANGE_USER,
    payload: {
        user
    }
});