import {
    GET_COMMENT_SUCCESS,
    GET_COMMENT_LOADING,
    GET_COMMENT_ERRORED,
    ADD_COMMENT,
    UPDATE_COMMENT
} from "../actions/Comment";


const commentIniState = {
  id:'',
  timestamp:'',
  author:'',
  body:'',
  parentId: ''
};

//All Posts
export function commentsErrored(state = false, action) {
    switch (action.type) {
        case GET_COMMENT_ERRORED:
            return action.hasErrored;
        default:
            return state;
    }
}

export function commentsLoading(state = false, action) {
    switch (action.type) {
        case GET_COMMENT_LOADING:
            return action.isLoading;
        default:
            return state;
    }
}

export function commentsSuccess(state = [], action) {
    switch (action.type) {
        case  GET_COMMENT_SUCCESS:
            action.comments.filter((comment)=> comment.deleted !== false);
            // Sort from highest to lowest votes when returning the array
            action.comments.sort(function (a, b) {
                return (a.voteScore > b.voteScore)? -1 : ((b.voteScore > a.voteScore)? 1 : 0);
            });
            //returned the posts array ordered
            return  action.comments;
        default:
            return state;
    }
}

export function addComment(state = commentIniState, action) {

    switch (action.type){
        case ADD_COMMENT:

            return {
                ...state,
                ...action.comment
            };
        case UPDATE_COMMENT:
            return {
                ...state,
                [action.payload.field]: action.payload.value
            };
        default:
            return state;
    }
}