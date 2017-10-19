import {dateNow, url, uuid} from "../utils/helpers";
import history from '../history';
import {getPostComments} from "./Comment";
import {categoryDetailFetchData} from "./Category";

import {
    POSTS_ERROR,
    POSTS_LOADING,
    POSTS_FETCH,
    POSTDETAIL_ERROR,
    POSTDETAIL_LOADING,
    POSTDETAIL_FETCH,
    CREATE_POSTDETAIL_FETCH,
    UPDATE_POSTDETAIL_FIELD,
    INSERT_POST_LOADING,
    INSERT_POST_ERRORED,
    INSERT_POST,
    POST_TO_DELETE,
    DELETE_POST_LOADING,
    DELETE_POST_ERRORED,
    DELETE_POST,
    UPVOTE,
    DOWNVOTE

} from './types';


//ALL POSTS
export function postsErrored(bool) {
    return {
        type: POSTS_ERROR,
        hasErrored: bool
    };
}

export function postsLoading(bool) {
    return {
        type: POSTS_LOADING,
        isLoading: bool
    };
}

export function postsFetch(posts) {

    return {
        type: POSTS_FETCH,
        posts
    };
}


//SINGLE POST
export function postDetailErrored(bool) {
    return {
        type: POSTDETAIL_ERROR,
        hasErrored: bool
    };
}

export function postDetailLoading(bool) {
    return {
        type: POSTDETAIL_LOADING,
        isLoading: bool
    };
}

export function postDetailFetch(post) {
    return {
        type: POSTDETAIL_FETCH,
        post
    };
}

//INSERT NEW POST OR UPDATE ONE
export function insertPostErrored(bool) {
    return {
        type: INSERT_POST_ERRORED,
        insertPostErrored: bool
    };
}

export function insertPostLoading(bool) {
    return {
        type: INSERT_POST_LOADING,
        insertPostLoading: bool
    };
}

export function insertPostAction(bool) {
    return {
        type: INSERT_POST,
        insertPostSuccess: bool
    };
}


//GENERAL ACTIONS
export const createPostDetail = () => ({
    type: CREATE_POSTDETAIL_FETCH,

});

export const updatePostDetailField = (field, value) => ({
    type: UPDATE_POSTDETAIL_FIELD,
    payload: {
        field,
        value
    }
});

export const postToDelete = (post) => ({
    type: POST_TO_DELETE,
    post
});

export function upVotePost(bool) {
    return {
        type: UPVOTE,
        upVoteSuccess: bool
    };
}

export function downVotePost(bool) {
    return {
        type: DOWNVOTE,
        downVoteSuccess: bool
    };
}


//DELETE POST
export function deletePostErrored(bool) {
    return {
        type: DELETE_POST_ERRORED,
        deletedPostErrored: bool
    };
}

export function deletePostLoading(bool) {
    return {
        type: DELETE_POST_LOADING,
        deletedPostLoading: bool
    };
}

export function deletePostAction(post) {
    return {
        type: DELETE_POST,
        deletedPost: post
    };
}


//GET ALL THE POSTS
export function postsFetchData() {
    const fetchURL = url('posts');
    return (dispatch) => {
        dispatch(postsLoading(true));
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
                dispatch(postsLoading(false));


                return response;

            })
            .then((response) => response.json())
            .then((posts) =>
                Promise.all(
                    posts.map(post =>
                        getPostComments(post.id)
                            .then((comments) => {
                                    post.comments = comments;
                                }
                            )
                            .then(() => post)
                            .catch(function (error) {
                                console.log('There has been a problem with your fetch operation: ' + error.message);
                            })
                    )
                )
            )
            .then((posts) => dispatch(postsFetch(posts)))
            .catch(function (error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
                dispatch(postsErrored(true));
            });
    };
}

// GET A POST ID
export function postDetailFetchData(postID) {
    const fetchURL = url('posts/' + postID);
    return (dispatch) => {
        dispatch(postDetailLoading(true));
        dispatch(insertPostAction(false));
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
                dispatch(postDetailLoading(false));

                return response;

            })
            .then((response) => response.json())
            .then(post =>

                getPostComments(post.id)
                    .then((comments) => {

                        post.comments = comments;
                    })
                    .then(() => post)
                    .catch(function (error) {
                        console.log('There has been a problem with your fetch operation: ' + error.message);
                    })
            )
            .then((post) => {
                dispatch(postDetailFetch(post));
                dispatch(categoryDetailFetchData(post.category));
            })
            .catch(function (error) {
                    console.log('There has been a problem with your fetch operation: ' + error.message + ' ' + fetchURL);
                    dispatch(postDetailErrored(true));
                }
            );
    };
}

// INSERT A POST
export function insertPostData(post, param) {
    //Use the param option to see if is a POST OR PUT action
    param = param.toUpperCase().trim();
    let fetchURL = url('posts');
    //Change the api endpoint in case is a put action
    if (param === 'PUT') {
        fetchURL += '/' + post.id;
    }
    if (param === 'POST') {
        post.id = uuid();
    }
    //add the timestamp
    post.timestamp = dateNow();

    return (dispatch) => {

        dispatch(insertPostLoading(true));

        fetch(
            fetchURL,
            {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'readableApp',
                    'Content-Type': 'application/json'
                },
                method: param,
                body: JSON.stringify({...post})

            }
        )
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(insertPostLoading(false));

                return response;

            })
            .then((response) => response.json())
            .then((post) => {

                dispatch(insertPostAction(true));

            })
            .catch(function (error) {
                    console.log('There has been a problem with your fetch operation: ' + error.message);
                    dispatch(insertPostErrored(true));
                }
            );
    };
}

//DELETE A POST
export function deletePostData(post) {

    const fetchURL = url('posts/' + post);

    return (dispatch) => {

        dispatch(deletePostLoading(true));

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
                dispatch(deletePostLoading(false));

                return response;

            })
            .then((response) => response.json())
            .then((post) => {
                dispatch(deletePostAction(post));
                dispatch(postsFetchData());
                history.push('/');

            })
            .catch(function (error) {
                    console.log('There has been a problem with your fetch operation: ' + error.message);
                    dispatch(deletePostErrored(true));
                }
            );
    };
}

//VOTE ON A POST
export function votePost(post, param) {
    const fetchURL = url('posts/' + post);
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
            .then(() => {
                if (param === 'upVote') {
                    dispatch(upVotePost(true));
                    dispatch(postDetailFetchData(post));
                    dispatch(postsFetchData());


                }
                if (param === 'downVote') {

                    dispatch(downVotePost(true));
                    dispatch(postDetailFetchData(post));
                    dispatch(postsFetchData());

                }
            })
            .catch(function (error) {
                    console.log('There has been a problem with your fetch operation: ' + error.message);

                }
            );
    };
}

