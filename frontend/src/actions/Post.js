export const POSTS_ERROR= 'POSTS_ERROR';
export const POSTS_LOADING= 'POSTS_LOADING';
export const POSTS_FETCH= 'POSTS_FETCH';

export const POSTDETAIL_ERROR= 'POSTDETAIL_ERROR';
export const POSTDETAIL_LOADING= 'POSTDETAIL_LOADING';
export const POSTDETAIL_FETCH= 'POSTDETAIL_FETCH';


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
        type:POSTS_FETCH,
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
        type:POSTDETAIL_FETCH,
        post
    };
}


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
export function postDetailFetchData(url) {
    return (dispatch) => {
        dispatch(postDetailLoading(true));
        fetch(
            url,
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
                    console.log('There has been a problem with your fetch operation: ' + error.message);
                    dispatch(postDetailErrored(true));
                }
            );
    };
}