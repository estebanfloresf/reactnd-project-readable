
import {url} from "../utils/helpers";

export const CATEGORIES_ERROR= 'CATEGORIES_ERROR';
export const CATEGORIES_LOADING= 'CATEGORIES_LOADING';
export const CATEGORIES_FETCH= 'CATEGORIES_FETCH';

export const CATEGORYDETAIL_ERROR= 'CATEGORYDETAIL_ERROR';
export const CATEGORYDETAIL_LOADING= 'CATEGORYDETAIL_LOADING';
export const CATEGORYDETAIL_FETCH= 'CATEGORYDETAIL_FETCH';


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
        type:CATEGORIES_FETCH,
        ...categories
    };
}




//SINGLE CATEGORY
export function categoryDetailErrored(bool) {
    return {
        type: CATEGORYDETAIL_ERROR,
        hasErrored: bool
    };
}

export function categoryDetailLoading(bool) {
    return {
        type: CATEGORIES_LOADING,
        isLoading: bool
    };
}

export function categoryDetailFetch(categories) {
    return {
        type: CATEGORYDETAIL_FETCH,
        categories
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



// GET A CATEGORY ID
export function categoryDetailFetchData(url) {
    return (dispatch) => {
        dispatch(categoryDetailLoading(true));
        fetch(
            url,
            {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'readableApp' +
                    '',
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
            .then((categories) => dispatch(categoryDetailFetch(categories)))
            .catch(function (error) {
                    console.log('There has been a problem with your fetch operation: ' + error.message);
                    dispatch(categoryDetailErrored(true));
                }
            );
    };
}