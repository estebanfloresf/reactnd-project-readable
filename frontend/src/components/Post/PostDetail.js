import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Post from './Post';
import Comment from '../Comment/Comment';
import {connect} from 'react-redux';
import {postDetailFetchData} from "../../actions/Post";
import {commentsFetchData, addComment, insertCommentSuccessAction} from "../../actions/Comment";
import CommentForm from '../Comment/addComment';
import DeletePost from "./deletePost";
import DeleteComment from '../Comment/deleteComment';
import {withRouter} from 'react-router-dom';


class PostDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            postID: '',
            post: '',
            insertSuccess: false,
            insertLoading: false,
            insertError: false,
            deleteSuccess: false,
            deleteLoading: false,
            deleteError: false
        };
    }

    componentWillMount() {
        this.setState({
            postID: this.props.match.params.post,
        });
    }

    componentDidMount() {
        this.props.postDetailFetchData(this.state.postID);
        this.props.commentsFetchData(this.state.postID);
        this.props.insertCommentSuccessAction(false);

    }

    componentWillReceiveProps(nextProps) {
        nextProps.insertCommentSuccess ? this.setState({insertSuccess: true}) : this.setState({insertSuccess: false});
        nextProps.insertCommentLoading ? this.setState({insertLoading: true}) : this.setState({insertLoading: false});
        nextProps.insertCommentErrored ? this.setState({insertError: true}) : this.setState({insertError: false});
        nextProps.deleteCommentSuccess ? this.setState({deleteSuccess: true}) : this.setState({deleteSuccess: false});
        nextProps.deleteCommentLoading ? this.setState({deleteLoading: true}) : this.setState({deleteLoading: false});
        nextProps.deleteCommentErrored ? this.setState({deleteError: true}) : this.setState({deleteError: false})
    }

    addComment(e) {
        e.preventDefault();
        this.hideAlert();
        this.props.insertCommentSuccessAction(false);
        this.props.addComment();
    }

    hideAlert() {
        this.setState({
            insertSuccess: false,
            insertLoading: false,
            insertError: false,
            deleteSuccess: false,
            deleteLoading: false,
            deleteError: false
        });
    }

    render() {

        const {postDetail, postDeleted, history, commentsSuccess} = this.props;
        const {insertSuccess, insertLoading, insertError, deleteSuccess, deleteLoading, deleteError} = this.state;
        console.log(insertSuccess, insertLoading, insertError, deleteSuccess, deleteLoading, deleteError)
        return (
            <div>
                {
                    insertSuccess ?
                        <div className="alert alert-success" style={{display: insertSuccess ? 'block' : 'none'}}>
                            <button type="button" className="close" aria-label="Close">
                                <span aria-hidden="true" onClick={this.hideAlert.bind(this)}>&times;</span>
                            </button>
                            <strong>Great! </strong>Your comment has been added
                        </div>
                        : insertLoading ?
                        <div className="alert alert-light" style={{display: insertLoading ? 'block' : 'none'}}>
                            <a className="close" onClick={this.hideAlert.bind(this)}>×</a>
                            <strong>Loading </strong>Your comment is being saved
                        </div>
                        : insertError ?
                            <div className="alert alert-danger" style={{display: insertError ? 'block' : 'none'}}>
                                <button type="button" className="close" aria-label="Close">
                                    <span aria-hidden="true" onClick={this.hideAlert.bind(this)}>&times;</span>
                                </button>
                                <strong>Holy guacamole! </strong>There was a problem while saving your comment.
                            </div>

                            : deleteSuccess ?
                                <div className="alert alert-success"     style={{display: deleteSuccess ? 'block' : 'none'}}>
                                    <button type="button" className="close" aria-label="Close">
                                        <span aria-hidden="true" onClick={this.hideAlert.bind(this)}>&times;</span>
                                    </button>
                                    <strong>Great! </strong>Your comment has been deleted
                                </div>
                                : deleteError ?
                                    <div className="alert alert-danger" style={{display: deleteError ? 'block' : 'none'}}>
                                        <button type="button" className="close" aria-label="Close">
                                            <span aria-hidden="true" onClick={this.hideAlert.bind(this)}>&times;</span>
                                        </button>
                                        <strong>Holy guacamole! </strong>There was a problem while deleting your
                                        comment.
                                    </div>
                                    : deleteLoading &&
                                    <div className="alert alert-light" style={{display: deleteLoading ? 'block' : 'none'}}>
                                        <a className="close" onClick={this.hideAlert.bind(this)}>×</a>
                                        <strong>Loading</strong>Your comment is being deleted
                                    </div>
                }

                <div className="d-flex flex-column justify-content-between">
                    {
                        postDeleted.length > 0 ? history.push('/')
                            : this.props.postsErrored ? <div className="p-2">
                                <Link to="/" className="btn btn-secondary btn-sm"><i
                                    className="fa fa-arrow-left fa-fw"
                                    aria-hidden="true"/>
                                    Back to Home Page</Link>
                                <div className="alert alert-danger" role="alert"><p>Sorry! We did not find that
                                    post</p></div>
                            </div>
                            : this.props.postDetail.title.length > 0 ? <div>

                                    <div className="p-2">
                                        <Link to="/" className="btn btn-secondary btn-sm"><i
                                            className="fa fa-arrow-left fa-fw"
                                            aria-hidden="true"/>
                                            Back to Home Page</Link>
                                    </div>


                                    <div className="p-2">
                                        <Post key={postDetail.id} post={postDetail}/>
                                    </div>
                                    {
                                        this.props.commentsLoading ?
                                            <div className="alert alert-info" role="alert"><p>Loading…</p></div> :
                                            this.props.commentsErrored ?
                                                <div className="alert alert-danger" role="alert"><p>Sorry! We did
                                                    not find any
                                                    comments</p>
                                                </div> :
                                                commentsSuccess.length > 0 ? commentsSuccess.map((comment) =>
                                                        <div className="p-2" key={comment.id}><Comment comment={comment}/>
                                                        </div>)
                                                    :
                                                    <div className="alert alert-light" role="alert"><p> Care to leave a
                                                        new comment?
                                                        Click on the
                                                        add button
                                                        at the
                                                        bottom of
                                                        the screen
                                                        <span role="img" aria-label="">😉</span></p></div>
                                    }
                                </div>
                                : this.props.postLoading ? <div className="p-2">
                                        <Link to="/" className="btn btn-secondary btn-sm"><i
                                            className="fa fa-arrow-left fa-fw"
                                            aria-hidden="true"/>
                                            Back to Home Page</Link>
                                        <div className="alert alert-info" role="alert"><p>Loading…</p></div>
                                    </div>
                                    : <div className="p-2">
                                        <Link to="/" className="btn btn-secondary btn-sm"><i
                                            className="fa fa-arrow-left fa-fw"
                                            aria-hidden="true"/>
                                            Back to Home Page</Link>
                                        <div className="alert alert-danger" role="alert"><p>Sorry! We did not find that
                                            post</p></div>
                                    </div>
                    }
                </div>

                {!this.props.postsErrored &&
                <button id="addcomment" value="addComment" className="btn btn-primary" data-toggle="modal"
                        data-target="#commentModal" data-comment="addComment" onClick={this.addComment.bind(this)}>
                    <i className="fa fa-plus" aria-hidden="true"/>
                </button>
                }
                <CommentForm/>
                <DeletePost post={postDetail}/>
                <DeleteComment/>


            </div>

        );
    }
}

function mapStateToProps(state) {

    return {

        postDetail: state.postDetail,
        postsErrored: state.postDetailErrored,
        postLoading: state.postDetailLoading,
        postDeleted: state.deletePostSuccess,
        commentsErrored: state.commentsErrored,
        commentsLoading: state.commentsLoading,
        commentsSuccess: state.commentsSuccess,
        insertCommentSuccess: state.insertCommentSuccess,
        insertCommentLoading: state.insertCommentLoading,
        insertCommentErrored: state.insertCommentErrored,
        deleteCommentSuccess: state.deleteCommentSuccess,
        deleteCommentLoading: state.deleteCommentLoading,
        deleteCommentErrored: state.deleteCommentErrored,

    };
}

const mapDispatchToProps = {
    postDetailFetchData,
    commentsFetchData,
    insertCommentSuccessAction,
    addComment
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostDetail));

