import {url } from "../utils/helpers";

export const INSERT_COMMENT_LOADING = 'INSERT_COMMENT_LOADING';
export const INSERT_COMMENT_ERRORED = 'INSERT_COMMENT_ERRORED';
export const INSERT_COMMENT_SUCCESS = 'INSERT_COMMENT_SUCCESS';
export const GET_COMMENT_LOADING = 'GET_COMMENT_LOADING';
export const GET_COMMENT_ERRORED = 'GET_COMMENT_ERRORED';
export const GET_COMMENT_SUCCESS = 'GET_COMMENT_SUCCESS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';


//ALL COMMENTS
export function commentsErrored(bool) {
    return {
        type: GET_COMMENT_ERRORED,
        hasErrored: bool
    };
}

export function commentsLoading(bool) {
    return {
        type: GET_COMMENT_LOADING,
        isLoading: bool
    };
}

export function commentSuccess(comments) {

    return {
        type: GET_COMMENT_SUCCESS,
        comments
    };
}


//INSERT NEW COMMENT OR UPDATE ONE
export function insertCommentErrored(bool) {
    return {
        type: INSERT_COMMENT_ERRORED,
        insertCommentErrored: bool
    };
}

export function insertCommentLoading(bool) {
    return {
        type: INSERT_COMMENT_LOADING,
        insertCommentLoading: bool
    };
}


export function insertCommentAction(bool) {
    return {
        type: INSERT_COMMENT_SUCCESS,
        insertCommentSuccess: bool
    };
}

export const addComment = (comment) => {
    return{
        type: ADD_COMMENT,
        comment
    };
};

export const updateComment = (field, value) => ({
    type: UPDATE_COMMENT,
    payload: {
        field,
        value
    }
});

//GET ALL THE COMMENTS
export function commentsFetchData(postID) {
    const fetchURL = url('posts/'+postID+'/comments');
    return (dispatch) => {
        dispatch(commentsLoading(true));
        fetch(
            fetchURL,
            {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'readableApp',
                    'Content-Type': 'application/json'
                }
            }
        )
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(commentsLoading(false));

                return response;

            })
            .then((response) => response.json())
            .then((comments) => dispatch(commentSuccess(comments)))
            .catch(function (error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
                dispatch(commentsErrored(true));
            });
    };
}

