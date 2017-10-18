import {
    GET_COMMENT_SUCCESS,
    GET_COMMENT_LOADING,
    GET_COMMENT_ERRORED,
    ADD_COMMENT,
    EDIT_COMMENT,
    DELETE_COMMENT_SELECTED,
    DELETE_COMMENT_ERRORED,
    DELETE_COMMENT_LOADING,
    DELETE_COMMENT,
    UPDATE_COMMENT_FIELD,
    INSERT_COMMENT_ERRORED,
    INSERT_COMMENT_LOADING,
    INSERT_COMMENT_SUCCESS,
    UPVOTE_COMMENT,
    DOWNVOTE_COMMENT
} from "../actions/Comment";


const commentIniState = {
    id: '',
    timestamp: '',
    author: '',
    body: '',
    parentId: ''
};

//All Comments
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
            action.comments.filter((comment) => comment.deleted !== false);
            // Sort from highest to lowest votes when returning the array
            action.comments.sort(function (a, b) {
                return (a.voteScore > b.voteScore) ? -1 : ((b.voteScore > a.voteScore) ? 1 : 0);
            });
            //returned the comments array ordered
            return action.comments;
        default:
            return state;
    }
}

export function addComment(state = commentIniState, action) {

    switch (action.type) {
        case EDIT_COMMENT:
            return {
                ...state,
                ...action.comment
            };
        case ADD_COMMENT:
            return commentIniState;
        case UPDATE_COMMENT_FIELD:
            return {
                ...state,
                [action.payload.field]: action.payload.value
            };
        default:
            return state;
    }
}

export function deleteComment(state = commentIniState, action) {
    switch (action.type) {
        case DELETE_COMMENT_SELECTED:
            return {
                ...state,
                ...action.comment
            };
        default:
            return state;
    }
}

export function insertCommentErrored(state = false, action) {
    switch (action.type) {
        case INSERT_COMMENT_ERRORED:
            return action.addCommentErrored;
        default:
            return state;
    }
}

export function insertCommentLoading(state = false, action) {
    switch (action.type) {
        case INSERT_COMMENT_LOADING:
            return action.addCommentLoading;
        default:
            return state;
    }
}

export function insertCommentSuccess(state = false, action) {
    switch (action.type) {
        case  INSERT_COMMENT_SUCCESS:
            return action.addCommentSuccess;
        default:
            return state;
    }
}

export function deleteCommentErrored(state = false, action) {
    switch (action.type) {
        case DELETE_COMMENT_ERRORED:
            return action.deleteCommentErrored;
        default:
            return state;
    }
}

export function deleteCommentLoading(state = false, action) {
    switch (action.type) {
        case DELETE_COMMENT_LOADING:
            return action.deleteCommentLoading;
        default:
            return state;
    }
}

export function deleteCommentSuccess(state = false, action) {
    switch (action.type) {
        case  DELETE_COMMENT:
            return action.deleteCommentSuccess;
        default:
            return state;
    }
}

export function voteComment(state=false, action) {
    switch (action.type){
        case UPVOTE_COMMENT:
            return action.upVoteComment;
        case DOWNVOTE_COMMENT:
            return action.downVoteComment;
        default:
            return state;
    }
}