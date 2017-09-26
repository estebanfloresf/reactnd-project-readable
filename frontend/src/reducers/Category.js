import {
    CATEGORIES_ERROR,
    CATEGORIES_LOADING,
    CATEGORIES_FETCH,
    CATEGORYDETAIL_FETCH,
    CATEGORYDETAIL_ERROR,
    CATEGORYDETAIL_LOADING}
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
        case CATEGORYDETAIL_ERROR:
            return action.hasErrored;
        default:
            return state;
    }
}
export function categoryDetailLoading(state = false, action) {
    switch (action.type) {
        case CATEGORYDETAIL_LOADING:
            return action.isLoading;
        default:
            return state;
    }
}
export function categoryDetail(state = [], action) {
    switch (action.type) {
        case  CATEGORYDETAIL_FETCH:
            return action.categories;
        default:
            return state;
    }
}



