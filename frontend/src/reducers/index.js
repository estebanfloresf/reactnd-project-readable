import {combineReducers} from 'redux'

import {
    POSTS_FETCH,
    POSTS_LOADING,
    POSTS_ERROR

} from '../actions'


function postsErrored(state = false, action) {
    switch (action.type) {
        case POSTS_ERROR:
            return action.hasErrored;
        default:
            return state;
    }
}

function postsLoading(state = false, action) {
    switch (action.type) {
        case POSTS_LOADING:
            return action.isLoading;
        default:
            return state;
    }
}

function posts(state = [], action) {
    switch (action.type) {
        case  POSTS_FETCH:
            return action.posts;
        default:
            return state;
    }
}


export default combineReducers({
    postsErrored,
    postsLoading,
    posts
})