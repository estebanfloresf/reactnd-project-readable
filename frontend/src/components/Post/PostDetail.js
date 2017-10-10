import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Post from './Post';
import Comment from '../Comment/Comment';
import {connect} from 'react-redux';
import {postDetailFetchData} from "../../actions/Post";
import {commentsFetchData, addComment} from "../../actions/Comment";
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
            success: false
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
    }

    render() {

        const {postDetail, postDeleted, history, commentsSuccess, insertCommentSuccess,insertCommentLoading,insertCommentErrored} = this.props;

        return (

            <div>

                {
                    insertCommentErrored?  <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <strong>Holy guacamole!</strong>There was a problem while saving your comment.
                    </div> : insertCommentLoading?  <div className="alert alert-light alert-dismissible fade show" role="alert">
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <strong>Loading </strong>
                    </div>: insertCommentSuccess &&
                        <div className="alert alert-success alert-dismissible fade show" role="alert">
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <strong>Great!</strong>Your comment has been added
                        </div>
                }


                <div className="d-flex flex-column justify-content-between">

                    {
                        postDeleted.length > 0 ? history.push('/') :

                            this.props.postsErrored ?
                                <div className="alert alert-danger" role="alert"><p>Sorry! We did not find that post</p>
                                </div> :

                                this.props.postLoading ?
                                    <div className="alert alert-info" role="alert"><p>Loading…</p></div> :


                                    <div>
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
                                                    commentsSuccess.length > 0 ? commentsSuccess.map((comment) => <div
                                                            className="p-2" key={comment.id}><Comment  comment={comment}/>
                                                        </div>) :
                                                        <div className="alert alert-light" role="alert"><p> Care to                                                                                                           leave a new
                                                                                                            comment?
                                                                                                            Click on the
                                                                                                            add button
                                                                                                            at the
                                                                                                            bottom of
                                                                                                            the screen
                                                            <span role="img" aria-label="">😉</span></p></div>
                                        }
                                    </div>
                    }
                </div>

                {!this.props.postsErrored &&
                <button id="addcomment" value="addComment" className="btn btn-primary" data-toggle="modal"
                        data-target="#commentModal" data-comment="addComment" onClick={() => this.props.addComment()}>
                    <i className="fa fa-plus" aria-hidden="true"/>
                </button>
                }
                <CommentForm/>
                <DeletePost post={postDetail}/>
                <DeleteComment />


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

    };
}

const mapDispatchToProps = {
    postDetailFetchData,
    commentsFetchData,
    addComment
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostDetail));

