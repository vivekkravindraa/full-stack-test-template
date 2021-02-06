import {
    GET_COMMENTS,
    REMOVE_COMMENTS,
    SET_VALUE
} from '../actions/types.js';

const initialState = {
    value: 0,
    comments: []
};

export const commentsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_VALUE:
            return {
                ...state,
                value: action.payload
            }
        case GET_COMMENTS:
            return {
                ...state,
                comments: action.payload
            };
        case REMOVE_COMMENTS:
            state.comments.splice(0, state.value);
            return {
                ...state,
                comments: [...state.comments]
            }
        default:
            return state;
    }
}