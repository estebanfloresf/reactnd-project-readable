import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {formatDate} from "../../utils/helpers";
import {connect} from 'react-redux';
import {postToDelete, votePost, postDetailFetchData} from "../../actions/Post";
import {commentsFetchData, insertCommentSuccessAction} from '../../actions/Comment';

class Post extends Component {

    componentWillMount() {
        this.props.commentsFetchData(this.props.post.id);
    }

    deletePost(post, e) {
        e.preventDefault();
        this.props.insertCommentSuccessAction(false);
        this.props.postToDelete(post);
    }

    votePost(post, param, e) {
        e.preventDefault();
        this.props.votePost(post.id, param);
        // this.props.postDetailFetchData(this.props.post.id);
    }

    render() {
        const {post} = this.props;
        return (
            <div className="card border-primary mb-3">
                <div className="card-body text-primary">
                    {/*title*/}
                    <div className="d-flex justify-content-end align-items-center">
                        <div className="mr-auto p-2">
                            <h5>
                                <Link to={`/${post.category}/${post.id}`}>{post.title} </Link>
                            </h5>
                        </div>
                        <div className="p-2">
                            <Link to={`/addPost/${post.id}`} id="edit" className="btn btn-link btn-info btn-sm"><i
                                className="fa fa-pencil"
                                aria-hidden="true"/></Link>
                        </div>
                        <div className="p-2">

                            <button type="button" id="delete" className="btn btn-link  btn-danger btn-sm"
                                    data-toggle="modal"
                                    onClick={this.deletePost.bind(this, post)}
                                    data-target="#deletePost"
                            ><i className="fa fa-trash"
                                aria-hidden="true"/></button>

                        </div>
                    </div>
                    {/*Body*/}
                    <div className="d-flex">
                        <p className="card-text p-2 text-justify">{post.body}</p>
                    </div>
                    {/*Controls*/}
                    <div className="d-flex flex-row justify-content-around align-items-center">
                        <div className="p-2">
                            <p className="card-text" id="card-text-info">
                                <small className="text-capitalize"><i
                                    className="text-primary fa fa-user fa-fw"/> {post.author}
                                </small>
                            </p>
                        </div>

                        <div className="d-flex flex-row align-items-center">

                            <div className="p-2">
                                <small className="">
                                    <button className="btn btn-link btn-sm"
                                            onClick={this.votePost.bind(this, post, "upVote")}>
                                        <span><i className="text-primary fa fa-thumbs-up fa-fw"/></span>
                                    </button>
                                </small>
                            </div>
                            <div className="p-2">
                                <small className="card-text">{post.voteScore} votes</small>
                            </div>
                            <div className="p-2">
                                <small className="">
                                    <button className="btn btn-link btn-sm"
                                            onClick={this.votePost.bind(this, post, "downVote")}>
                                        <span><i className="text-primary fa fa-thumbs-down fa-fw"/></span></button>
                                </small>
                            </div>
                        </div>

                        <div className="p-2">
                            <p className="card-text">
                                <small className=""><i className=" text-primary fa fa-comment fa-fw"/>
                                    <strong> {post.comments.length} </strong>
                                    comments
                                </small>
                            </p>
                        </div>
                        <div className="p-2">
                            <p className="card-text text-upper">
                                <small className="text-uppercase">
                                    <Link to={`/${post.category}`}>

                                        <i className=" fa fa-tag fa-fw"
                                           aria-hidden="true"/>
                                        {post.category}
                                    </Link>
                                </small>
                            </p>
                        </div>
                        <div className="p-2">
                            <p className="card-text">
                                <small className=""><i
                                    className=" text-primary fa fa-calendar fa-fw"/> {formatDate(post.timestamp)}
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        postToDelete: state.postToDelete,
        comments: state.commentsSuccess
    };
};
const mapDispatchToProps = {
    postToDelete,
    postDetailFetchData,
    commentsFetchData,
    insertCommentSuccessAction,
    votePost
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);


