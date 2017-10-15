import {combineReducers} from 'redux';

import {
    categoriesErrored,
    categoriesLoading,
    categories,
    categoryDetailErrored,
    categoryDetailLoading,
    categoryDetail
} from './Category';

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
    deletePostErrored,
    votePost

} from './Post' ;

import {
    commentsErrored,
    commentsLoading,
    commentsSuccess,
    addComment,
    deleteComment,
    insertCommentErrored,
    insertCommentLoading,
    insertCommentSuccess,
    deleteCommentErrored,
    deleteCommentLoading,
    deleteCommentSuccess

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
    insertCommentSuccess,
    deleteComment,
    deleteCommentErrored,
    deleteCommentLoading,
    deleteCommentSuccess,
    votePost


});