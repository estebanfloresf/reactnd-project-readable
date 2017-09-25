import {combineReducers} from 'redux';

import {
    POSTS_FETCH,
    POSTS_LOADING,
    POSTS_ERROR,
    CATEGORIES_ERROR,
    CATEGORIES_LOADING,
    CATEGORIES_FETCH,
    POSTDETAIL_ERROR,
    POSTDETAIL_FETCH,
    POSTDETAIL_LOADING

} from '../actions';


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



function categoriesErrored(state = false, action) {
    switch (action.type) {
        case CATEGORIES_ERROR:
            return action.hasErrored;
        default:
            return state;
    }
}

function categoriesLoading(state = false, action) {
    switch (action.type) {
        case CATEGORIES_LOADING:
            return action.isLoading;
        default:
            return state;
    }
}

function categories(state = [], action) {
    switch (action.type) {
        case  CATEGORIES_FETCH:
            return action.categories;
        default:
            return state;
    }
}



function postDetailErrored(state = false, action) {
    switch (action.type) {
        case POSTDETAIL_ERROR:
            return action.hasErrored;
        default:
            return state;
    }
}

function postDetailLoading(state = false, action) {
    switch (action.type) {
        case POSTDETAIL_LOADING:
            return action.isLoading;
        default:
            return state;
    }
}

function postDetail(state = [], action) {
    switch (action.type) {
        case  POSTDETAIL_FETCH:
            return action.post;
        default:
            return state;
    }
}




export default combineReducers({
    postsErrored,
    postsLoading,
    posts,
    categoriesErrored,
    categoriesLoading,
    categories,
    postDetailErrored,
    postDetailLoading,
    postDetail

});