import {url} from "../utils/helpers";
import {getPostComments} from "./Comment";

import {
    CATEGORIES_ERROR,
    CATEGORIES_LOADING,
    CATEGORIES_FETCH,
    CATEGORY_DETAIL_ERROR,
    CATEGORY_DETAIL_LOADING,
    CATEGORY_DETAIL_FETCH,

} from './types';

//ALL CATEGORIES
export function categoriesErrored(bool) {
    return {
        type: CATEGORIES_ERROR,
        hasErrored: bool
    };
}

export function categoriesLoading(bool) {
    return {
        type: CATEGORIES_LOADING,
        isLoading: bool
    };
}

export function categoriesFetch(categories) {
    return {
        type: CATEGORIES_FETCH,
        ...categories
    };
}


//SINGLE CATEGORY
export function categoryDetailErrored(bool) {
    return {
        type: CATEGORY_DETAIL_ERROR,
        hasErrored: bool
    };
}

export function categoryDetailLoading(bool) {
    return {
        type: CATEGORY_DETAIL_LOADING,
        isLoading: bool
    };
}

export function categoryDetailFetch(categoryPosts) {
    return {
        type: CATEGORY_DETAIL_FETCH,
        categoryPosts
    };
}


// GET ALL THE CATEGORIES
export function categoriesFetchData() {
    const fetchURL = url('categories');


    return (dispatch) => {
        dispatch(categoriesLoading(true));
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
                dispatch(categoriesLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((categories) => dispatch(categoriesFetch(categories)))
            .catch(function (error) {
                    console.log('There has been a problem with your fetch operation: ' + error.message);
                    dispatch(categoriesErrored(true));
                }
            );
    };
}

// GET  POSTS FROM SPECIFIC CATEGORY
export function categoryDetailFetchData(category) {

    const fetchURL = url(category + '/posts');

    return (dispatch) => {
        dispatch(categoryDetailLoading(true));
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
                dispatch(categoryDetailLoading(false));

                return response;

            })
            .then((response) => response.json())
            .then((postsCategories) =>
                Promise.all(
                    postsCategories.map(post =>
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
            .then((postsCategories) =>

                dispatch(categoryDetailFetch(postsCategories))
            )
            .catch(function (error) {
                    console.log('There has been a problem with your fetch operation: ' + error.message);
                    dispatch(categoryDetailErrored(true));
                }
            );
    };
}