import React from 'react';
import {Link} from 'react-router-dom';
import {formatDate} from "../../utils/helpers";
import {editComment, deleteCommentSelected, deleteCommentSuccess, insertCommentSuccessAction} from "../../actions/Comment";
import {connect} from 'react-redux';


const mapDispatchToProps = (dispatch, comment) => {

    return {
        fetchData: () => {
            dispatch(insertCommentSuccessAction(false));
            dispatch(editComment(comment.comment));
        },
        deleteComment: () => {
            dispatch(insertCommentSuccessAction(false));
            // dispatch(deleteCommentSuccess(false));
            dispatch(deleteCommentSelected(comment.comment));
        }

    };
};

const Comment = ({fetchData, deleteComment, comment}) => {
    return (
        <div className="col-md-10">
            <div className="card border-light mb-6">
                <div className="card-body">
                    <div className="d-flex ">
                        <p className="card-text p-2 text-justify">
                            {comment.body}
                        </p>

                    </div>
                    <div className="d-flex flex-row justify-content-around align-items-center">
                        <div className="p-2">
                            <p className="card-text" id="card-text-info">
                                <small className="text-muted text-capitalize"><i
                                    className="fa fa-user fa-fw"/>{comment.author}</small>
                            </p>
                        </div>
                        <div className="d-flex flex-row">
                            <div className="d-flex flex-row">

                                <div className="p-2">
                                    <small className="text-muted"><Link to="/"> <i
                                        className="fa fa-thumbs-up fa-fw"/></Link></small>
                                </div>
                                <div className="p-2">
                                    <small>{comment.voteScore} votes</small>
                                </div>
                                <div className="p-2">
                                    <small className="text-muted"><Link to="/"> <i
                                        className="fa fa-thumbs-down fa-fw "/></Link></small>
                                </div>
                            </div>

                        </div>
                        <div className="p-2">
                            <p className="card-text">
                                <small className="text-muted"><i
                                    className="fa fa-calendar fa-fw"/> {formatDate(comment.timestamp)}
                                </small>
                            </p>
                        </div>
                        <div className="p-2">
                            <button id="edit" className="btn btn-link btn-sm" aria-hidden="true"
                                    data-target="#commentModal" data-toggle="modal"
                                    onClick={() => fetchData(comment)}>
                                <i className="fa fa-pencil" aria-hidden="true"/></button>
                        </div>
                        <div className="p-2">
                            <button id="delete" className="btn btn-link btn-sm" data-target="#deleteComment"
                                    data-toggle="modal" onClick={() => deleteComment(comment)}>
                                <i className="fa fa-trash" aria-hidden="true"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default connect(null, mapDispatchToProps)(Comment);