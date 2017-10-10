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
    insertPostSuccess,
    insertPostErrored,
    insertPostLoading,
    postToDelete,
    deletePostSuccess,
    deletePostLoading,
    deletePostErrored

}  from './Post' ;

import {
    commentsErrored,
    commentsLoading,
    commentsSuccess,
    addComment,
    insertCommentErrored,
    insertCommentLoading,
    insertCommentSuccess

} from "./Comment";




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
    insertPostSuccess,
    insertPostErrored,
    insertPostLoading,
    postToDelete,
    deletePostSuccess,
    deletePostLoading,
    deletePostErrored,
    commentsErrored,
    commentsLoading,
    commentsSuccess,
    addComment,
    insertCommentErrored,
    insertCommentLoading,
    insertCommentSuccess

});