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
    POST_TO_DELETE,
    DELETE_POST,
    DELETE_POST_ERRORED,
    DELETE_POST_LOADING,
    UPVOTE,DOWNVOTE
} from '../actions/Post';



const postInitialState = {
    id: '',
    author: '',
    body: '',
    title: '',
    category: 'react',
    timestamp: null,
    deleted: false,
    voteScore: 0,
    comments:[]
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
            //if deleted dont show
            action.posts.filter((post)=> post.deleted !== false);
            // Sort from highest to lowest votes when returning the array
            action.posts.sort(function (a, b) {
                return (a.voteScore > b.voteScore)? -1 : ((b.voteScore > a.voteScore)? 1 : 0);
            });
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
            return postInitialState;
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

//POST TO BE DELETED
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

//DELETES POST


export function deletePostErrored(state = false, action) {
    switch (action.type) {
        case DELETE_POST_ERRORED:
            return action.deletedPostErrored;
        default:
            return state;
    }
}

export function deletePostLoading(state = false, action) {

    switch (action.type) {
        case DELETE_POST_LOADING:
            return action.deletedPostLoading;
        default:
            return state;
    }
}

export function deletePostSuccess(state = false, action) {
    switch (action.type) {
        case  DELETE_POST:
            return action.deletedPost;
        default:
            return state;
    }
}
export function votePost(state=false, action) {
    switch (action.type){
        case UPVOTE:
            return action.upVoteSuccess;
        case DOWNVOTE:
            return action.downVoteSuccess;
        default:
            return state;
    }
}
