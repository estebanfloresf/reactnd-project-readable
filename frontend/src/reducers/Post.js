import {
    POSTS_FETCH,
    POSTS_LOADING,
    POSTS_ERROR,
    POSTDETAIL_ERROR,
    POSTDETAIL_FETCH,
    POSTDETAIL_LOADING,
    CREATE_POSTDETAIL_FETCH,
    UPDATE_POSTDETAIL_FIELD,
    INSERT_POST,
    INSERT_POST_ERRORED,
    INSERT_POST_LOADING,
    POST_TO_DELETE
} from '../actions/Post';


const postInitialState = {
    id: '',
    author: '',
    body: '',
    title: '',
    category: 'react',
    timestamp: null
};

//All Posts
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
            // I just ordered from highest to lowest when returning the array
            action.posts.sort(function (a, b) {
                return (a.voteScore > b.voteScore)? -1 : ((b.voteScore > a.voteScore)? 1 : 0)
            });
            //returned the posts array ordered
            return  action.posts;
        default:
            return state;
    }
}

//Single Post
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

export function postDetail(state = postInitialState, action) {

    switch (action.type) {
        case  POSTDETAIL_FETCH:
            return {
                ...state,
                ...action.post
            };
        case CREATE_POSTDETAIL_FETCH:
            return action.payload;
        case UPDATE_POSTDETAIL_FIELD:
            return {
                ...state,
                [action.payload.field]: action.payload.value
            };
        default:
            return state;
    }
}


//Insert/Edit Post

export function insertPostErrored(state = false, action) {
    switch (action.type) {
        case INSERT_POST_ERRORED:
            return action.insertPostErrored;
        default:
            return state;
    }
}

export function insertPostLoading(state = false, action) {

    switch (action.type) {

        case INSERT_POST_LOADING:
            return action.insertPostLoading;
        default:
            return state;
    }
}

export function insertPostSuccess(state = false, action) {

    switch (action.type) {
        case  INSERT_POST:
            return action.insertPostSuccess;
        default:
            return state;
    }
}

export function postToDelete(state = postInitialState, action) {
    switch (action.type) {
        case  POST_TO_DELETE:
            return {
                ...state,
                ...action.post
            };
        default:
            return state;
    }
}





