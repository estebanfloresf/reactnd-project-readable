import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Post from './Post';
import Comment from '../Comment/Comment';
import {connect} from 'react-redux';
import {postDetailFetchData} from "../../actions/Post";
import CommentForm from '../Comment/addComment';
import DeletePost from "./deletePost";



class PostDetail extends Component {

    constructor(props) {
        super(props);


        this.state = {
            postID: '',
        };
    }

    componentWillMount() {
        this.setState({
            postID: this.props.match.params.post
        });

    }

    componentDidMount() {


        this.props.fetchData(this.state.postID);
    }


    render() {

        const {post} = this.props;


        return (


            <div>
                <div className="d-flex flex-column justify-content-between">

                    {this.props.hasErrored ?
                        <div className="alert alert-danger" role="alert"><p>Sorry! There was an error loading the
                                                                            items</p></div> :

                        this.props.isLoading ? <div className="alert alert-info" role="alert"><p>Loading…</p></div> :

                            <div>
                                <div className="p-2">
                                    <Link to="/" className="btn btn-secondary btn-sm"><i
                                        className="fa fa-arrow-left fa-fw"
                                        aria-hidden="true"/>
                                        Back to Home Page</Link>

                                </div>

                                <div className="p-2">


                                    <Post key={post.id} post={post}/>
                                </div>

                                <div className="p-2">
                                    <Comment/>
                                    <Comment/>
                                    <Comment/>
                                    <Comment/>

                                </div>


                            </div>
                    }


                </div>

                <button id="addcomment" value="addComment" className="btn btn-primary" data-toggle="modal"
                        data-target="#commentModal" data-comment="addComment">
                    <i className="fa fa-plus" aria-hidden="true"/>
                </button>

                <CommentForm/>
                <DeletePost post={post}/>


            </div>


        );


    }
}

function mapStateToProps(state) {

    return {

        post: state.postDetail,
        hasErrored: state.postDetailErrored,
        isLoading: state.postDetailLoading
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchData: (url) => dispatch(postDetailFetchData(url))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);

