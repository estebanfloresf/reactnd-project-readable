import {url, uuid, dateNow} from "../utils/helpers";
import {postDetailFetchData} from "./Post";

import {
    INSERT_COMMENT_LOADING,
INSERT_COMMENT_ERRORED,
INSERT_COMMENT_SUCCESS ,
GET_COMMENT_LOADING ,
GET_COMMENT_ERRORED ,
GET_COMMENT_SUCCESS,
ADD_COMMENT,
EDIT_COMMENT,
DELETE_COMMENT_SELECTED,
UPDATE_COMMENT_FIELD ,
DELETE_COMMENT ,
DELETE_COMMENT_LOADING ,
DELETE_COMMENT_ERRORED ,
UPVOTE_COMMENT ,
DOWNVOTE_COMMENT

} from './types';

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

//INSERT | UPDATE COMMENT
export function insertCommentErrored(bool) {
    return {
        type: INSERT_COMMENT_ERRORED,
        addCommentErrored: bool
    };
}
export function insertCommentLoading(bool) {
    return {
        type: INSERT_COMMENT_LOADING,
        addCommentLoading: bool
    };
}
export function insertCommentSuccessAction(bool) {
    return {
        type: INSERT_COMMENT_SUCCESS,
        addCommentSuccess: bool
    };
}

//DELETE COMMENT
export function deleteCommentErrored(bool) {
    return {
        type: DELETE_COMMENT_ERRORED,
        deleteCommentErrored: bool
    };
}
export function deleteCommentLoading(bool) {
    return {
        type: DELETE_COMMENT_LOADING,
        deleteCommentLoading: bool
    };
}
export function deleteCommentSuccess(bool) {
    return {
        type: DELETE_COMMENT,
        deleteCommentSuccess: bool
    };
}

export const addComment = () => {
    return {
        type: ADD_COMMENT,
    };
};
export const editComment = (comment) => {
    return {
        type: EDIT_COMMENT,
        comment
    };
};
export const deleteCommentSelected = (comment) => {
    return {
        type: DELETE_COMMENT_SELECTED,
        comment
    };
};
export const updateComment = (field, value) => ({
    type: UPDATE_COMMENT_FIELD,
    payload: {
        field,
        value
    }
});

export function upVoteComment(bool) {
    return {
        type: UPVOTE_COMMENT,
        upVoteComment: bool
    };
}

export function downVoteComment(bool) {
    return {
        type: DOWNVOTE_COMMENT,
        downVoteComment: bool
    };
}

//GET ALL THE COMMENTS
export function commentsFetchData(postID) {
    const fetchURL = url('posts/' + postID + '/comments');
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
//GET COMMENTS OF A POST
export function getPostComments(postID) {
    const fetchURL = url('posts/' + postID + '/comments');
    return fetch(
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

            return response;

        })
        .then((response) => response.json())
        .then((comments) => {
            return comments
        })
        .catch(function (error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);

        });

}

// INSERT A COMMENT
export function insertComment(comment, postID) {

    let fetchURL = url('comments');
    let param = 'POST';
    //Change the api endpoint in case is a put action
    if (comment.id !== '') {
        fetchURL += '/' + comment.id;
        param = 'PUT';
    }
    else {
        comment.id = uuid();
    }
    //add the timestamp
    comment.timestamp = dateNow();
    comment.parentId = postID;
    return (dispatch) => {

        dispatch(insertCommentLoading(false));

        fetch(
            fetchURL,
            {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'readableApp',
                    'Content-Type': 'application/json'
                },
                method: param,
                body: JSON.stringify({...comment})

            }
        )
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(insertCommentLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then(() => {
                dispatch(deleteCommentSuccess(false));
                dispatch(insertCommentSuccessAction(true));
                dispatch(commentsFetchData(postID));
                dispatch(postDetailFetchData(postID));

            })
            .catch(function (error) {
                    dispatch(insertCommentErrored(true));
                    console.log('There has been a problem with your fetch operation: ' + error.message);
                }
            );
    };
}

// DELETE A COMMENT
export function deleteCommentAction(commentID, postID) {

    let fetchURL = url('comments/' + commentID);
    return (dispatch) => {
        dispatch(deleteCommentLoading(true));

        fetch(
            fetchURL,
            {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'readableApp',
                    'Content-Type': 'application/json'
                },
                method: 'DELETE',
            }
        )
            .then((response) => {

                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(deleteCommentLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then(() => {

                dispatch(deleteCommentSuccess(true));
                dispatch(commentsFetchData(postID));

                dispatch(postDetailFetchData(postID));


            })
            .catch(function (error) {
                    console.log('There has been a problem with your fetch operation: ' + error.message);
                    dispatch(deleteCommentErrored(true));
                }
            );
    };
}

//VOTE COMMENT
export function voteComment(comment, param) {
    const fetchURL = url('comments/' + comment);
    return (dispatch) => {
        fetch(
            fetchURL,
            {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'readableApp',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({"option": param})
            }
        )
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then((comment) => {
                if (param === 'upVote') {

                    dispatch(upVoteComment(true));
                    dispatch(commentsFetchData(comment.parentId));
                }
                if (param === 'downVote') {
                    dispatch(downVoteComment(true));
                    dispatch(commentsFetchData(comment.parentId));

                }
            })
            .catch(function (error) {
                    console.log('There has been a problem with your fetch operation: ' + error.message);
                }
            );
    };
}



