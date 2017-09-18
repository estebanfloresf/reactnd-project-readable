export const POSTS_ERROR= 'POSTS_ERROR';
export const POSTS_LOADING= 'POSTS_LOADING';
export const POSTS_FETCH= 'POSTS_FETCH';

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

export function postFetch(posts) {
    return {
        type:POSTS_FETCH,
        posts
    };
}


//Redux Thunk

export function postsFetchData(url) {
    return (dispatch) => {
        dispatch(postsLoading(true));
        fetch(
                    url,
                    {
                         headers: { 'Authorization': 'getPosts' }
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
            .then((posts) => dispatch(postFetch(posts)))
            .catch(() => dispatch(postsErrored(true)));
    };
}


