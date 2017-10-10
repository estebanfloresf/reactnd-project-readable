import {
    GET_COMMENT_SUCCESS,
    GET_COMMENT_LOADING,
    GET_COMMENT_ERRORED,
    ADD_COMMENT,
    EDIT_COMMENT,
    UPDATE_COMMENT_FIELD,
    INSERT_COMMENT_ERRORED,
    INSERT_COMMENT_LOADING,
    INSERT_COMMENT_SUCCESS
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
            //Sort if comments not deleted
            action.comments.filter((comment)=> comment.deleted !== false);
            // Sort from highest to lowest votes when returning the array
            action.comments.sort(function (a, b) {
                return (a.voteScore > b.voteScore)? -1 : ((b.voteScore > a.voteScore)? 1 : 0);
            });
            //returned the comments array ordered
            return  action.comments;
        default:
            return state;
    }
}

export function addComment(state = commentIniState, action) {

    switch (action.type){
        case EDIT_COMMENT:
            return {
                ...state,
                ...action.comment
            };
        case ADD_COMMENT:
            return  commentIniState;
        case UPDATE_COMMENT_FIELD:
            return {
                ...state,
                [action.payload.field]: action.payload.value
            };
        default:
            return state;
    }
}

export function insertCommentErrored(state = false, action) {
    switch (action.type) {
        case INSERT_COMMENT_ERRORED:
            return action.insertCommentErrored;
        default:
            return state;
    }
}

export function insertCommentLoading(state = false, action) {
    switch (action.type) {
        case INSERT_COMMENT_LOADING:
            return action.insertCommentLoading;
        default:
            return state;
    }
}

export function insertCommentSuccess(state = false, action) {
    switch (action.type) {
        case  INSERT_COMMENT_SUCCESS:
            return action.insertCommentSuccess;
        case ADD_COMMENT:
            return false;
        case EDIT_COMMENT:
            return false;
        default:
            return state;
    }
}