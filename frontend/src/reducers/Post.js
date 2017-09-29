import {
    POSTS_FETCH,
    POSTS_LOADING,
    POSTS_ERROR,
    POSTDETAIL_ERROR,
    POSTDETAIL_FETCH,
    POSTDETAIL_LOADING,
    CREATE_POSTDETAIL_FETCH,
    UPDATE_POSTDETAIL_FIELD,

} from '../actions/Post';


export function postsErrored(state = false, action) {
    switch (action.type) {
        case POSTS_ERROR:
            return action.hasErrored;
        default:
            return state;
    }
}

export function postsLoading(state = false, action) {
    switch (action.type) {
        case POSTS_LOADING:
            return action.isLoading;
        default:
            return state;
    }
}

export function posts(state = [], action) {
    switch (action.type) {
        case  POSTS_FETCH:
            return action.posts;
        default:
            return state;
    }
}

export function postDetailErrored(state = false, action) {
    switch (action.type) {
        case POSTDETAIL_ERROR:
            return action.hasErrored;
        default:
            return state;
    }
}

export function postDetailLoading(state = false, action) {
    switch (action.type) {
        case POSTDETAIL_LOADING:
            return action.isLoading;
        default:
            return state;
    }
}

export function postDetail(state = [], action) {
    switch (action.type) {
        case  POSTDETAIL_FETCH:
            return action.post;
        case CREATE_POSTDETAIL_FETCH:

            return    action.payload;
        case UPDATE_POSTDETAIL_FIELD:
            return {
                ...state,
                [action.payload.field]: action.payload.value
            };
        default:
            return state;
    }
}



