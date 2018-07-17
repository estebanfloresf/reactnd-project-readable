import React, {Component} from 'react';
import {formatDate} from "../../utils/helpers";
import {editComment, deleteCommentSelected, insertCommentSuccessAction, voteComment,deleteCommentSuccess} from "../../actions/Comment";
import {connect} from 'react-redux';


class Comment extends Component {
    editComment(comment, e) {
        e.preventDefault();
        this.props.insertCommentSuccessAction(false);
        this.props.editComment(comment);
    }

    deleteComment(comment, e) {
        e.preventDefault();
        this.props.insertCommentSuccessAction(false);
        this.props.deleteCommentSuccess(false);
        this.props.deleteCommentSelected(comment);
    }

    voteComment(comment, param, e) {
        e.preventDefault();
        this.props.voteComment(comment.id, param);

    }

    render() {
        const {comment} = this.props;
        return (
            <div className="col-md-10">
                <div className="card border-light mb-6">
                    <div className="card-body">
                        <div className="d-flex  ">
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

                            <div className="d-flex flex-row align-items-center">

                                <div className="p-2">
                                    <small className="">
                                        <button className="btn btn-link btn-sm"
                                                onClick={this.voteComment.bind(this, comment, "upVote")}>
                                            <span><i className="text-primary fa fa-thumbs-up fa-fw"/></span>
                                        </button>
                                    </small>
                                </div>
                                <div className="p-2">
                                    <small className="card-text">{comment.voteScore} votes</small>
                                </div>
                                <div className="p-2">
                                    <small className="">
                                        <button className="btn btn-link btn-sm"
                                                onClick={this.voteComment.bind(this, comment, "downVote")}>
                                            <span><i className="text-primary fa fa-thumbs-down fa-fw"/></span>
                                        </button>
                                    </small>
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
                                        onClick={this.editComment.bind(this, comment)}>
                                    <i className="fa fa-pencil" aria-hidden="true"/></button>
                            </div>
                            <div className="p-2">
                                <button id="delete" className="btn btn-link btn-sm" data-target="#deleteComment"
                                        data-toggle="modal" onClick={this.deleteComment.bind(this, comment)}>
                                    <i className="fa fa-trash" aria-hidden="true"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = {
    editComment,
    insertCommentSuccessAction,
    deleteCommentSelected,
    deleteCommentSuccess,
    voteComment

};

export default connect(null, mapDispatchToProps)(Comment);