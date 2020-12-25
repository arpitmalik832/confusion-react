import * as ActionTypes from './ActionTypes';

export const Comments = (state = {
    err: null,
    comments: []
}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_COMMENT:
            return {...state, comments: state.comments.concat(action.payload)};
        case ActionTypes.ADD_COMMENTS:
            return {...state, err: null, comments: action.payload}
        case ActionTypes.COMMENTS_FAILED:
            return {...state, err: action.payload, comments: []}
        default:
            return state;
    }
}