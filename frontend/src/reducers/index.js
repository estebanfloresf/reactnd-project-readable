import { combineReducers } from 'redux';

import {
    categoriesErrored,
    categoriesLoading,
    categories,
    categoryDetailErrored,
    categoryDetailLoading,
    categoryDetail
}from './Category';

import {
    postsErrored,
    postsLoading,
    posts,
    postDetailErrored,
    postDetailLoading,
    postDetail,
    insertPostReduce,
    insertPostErrored,
    insertPostLoading

}  from './Post' ;






export default combineReducers({
    categoriesErrored,
    categoriesLoading,
    categories,
    categoryDetailErrored,
    categoryDetailLoading,
    categoryDetail,
    postsErrored,
    postsLoading,
    posts,
    postDetailErrored,
    postDetailLoading,
    postDetail,
    insertPostReduce,
    insertPostErrored,
    insertPostLoading,


});