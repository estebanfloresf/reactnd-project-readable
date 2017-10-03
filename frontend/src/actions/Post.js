import {url, uuid} from "../utils/helpers";

export const POSTS_ERROR = 'POSTS_ERROR';
export const POSTS_LOADING = 'POSTS_LOADING';
export const POSTS_FETCH = 'POSTS_FETCH';
export const POSTDETAIL_ERROR = 'POSTDETAIL_ERROR';
export const POSTDETAIL_LOADING = 'POSTDETAIL_LOADING';
export const POSTDETAIL_FETCH = 'POSTDETAIL_FETCH';
export const CREATE_POSTDETAIL_FETCH = 'CREATE_POSTDETAIL_FETCH';
export const UPDATE_POSTDETAIL_FIELD = 'UPDATE_POSTDETAIL_FIELD';
export const INSERT_POST_LOADING = 'INSERT_POST_LOADING';
export const INSERT_POST_ERRORED = 'INSERT_POST';
export const INSERT_POST = 'INSERT_POST';


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
        hasErrored: bool
    };
}

export function insertPostLoading(bool) {
    return {
        type: INSERT_POST_LOADING,
        isLoading: bool
    };
}


export const insertPost = (bool) => ({
    type: INSERT_POST,
    isSaved: bool
});

export const createPostDetail = () => ({
    type: CREATE_POSTDETAIL_FETCH,
    payload: {
        author: '',
        title: '',
        category: 'react',
        body: '',
        id: uuid()
    }
});

export const updatePostDetailField = (field, value) => ({
    type: UPDATE_POSTDETAIL_FIELD,
    payload: {
        field,
        value
    }
});


//Redux Thunk

//GET ALL THE POSTS
export function postsFetchData(url) {
    return (dispatch) => {
        dispatch(postsLoading(true));
        fetch(
            url,
            {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'posts',
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
        fetch(
            fetchURL,
            {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'postdetail',
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
            .then((post) => dispatch(postDetailFetch(post)))
            .catch(function (error) {
                    console.log('There has been a problem with your fetch operation: ' + error.message + ' ' + fetchURL);
                    dispatch(postDetailErrored(true));
                }
            );
    };
}

// INSERT A POST ID
export function insertPostData(post, param) {
    //Use the param option to see if is a POST OR PUT action
    param = param.toUpperCase().trim();
    let fetchURL = url('posts');
    //Change the api endpoint in case is a put action
    if (param === 'PUT') {
        fetchURL += '/' + post.id
    }
    //add the timestamp
    post.timestamp = Date.now();

    return (dispatch) => {

        dispatch(insertPostLoading(true));

       fetch(
            fetchURL,
            {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'addPost',
                    'Content-Type': 'application/json'
                },
                method: param,
                body: JSON.stringify(post)

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
            .then(() =>
                dispatch(insertPost(true))
            )
            .catch(function (error) {
                    console.log('There has been a problem with your fetch operation: ' + error.message);
                    dispatch(insertPostErrored(true));
                }
            );
    };
}

