import {
    CATEGORIES_ERROR,
    CATEGORIES_LOADING,
    CATEGORIES_FETCH,
    CATEGORY_DETAIL_FETCH,
    CATEGORY_DETAIL_ERROR,
    CATEGORY_DETAIL_LOADING}
    from "../actions/Category";


export function categoriesErrored(state = false, action) {
    switch (action.type) {
        case CATEGORIES_ERROR:
            return action.hasErrored;
        default:
            return state;
    }
}
export function categoriesLoading(state = false, action) {
    switch (action.type) {
        case CATEGORIES_LOADING:
            return action.isLoading;
        default:
            return state;
    }
}
export function categories(state = [], action) {
    switch (action.type) {
        case  CATEGORIES_FETCH:
            return action.categories;
        default:
            return state;
    }
}
export function categoryDetailErrored(state = false, action) {
    switch (action.type) {
        case CATEGORY_DETAIL_ERROR:
            return action.hasErrored;
        default:
            return state;
    }
}
export function categoryDetailLoading(state = false, action) {
    switch (action.type) {
        case CATEGORY_DETAIL_LOADING:
            return action.isLoading;
        default:
            return state;
    }
}
export function categoryDetail(state = [], action) {

    switch (action.type) {
        case  CATEGORY_DETAIL_FETCH:
            return action.categoryPosts;
        default:
            return state;
    }
}



