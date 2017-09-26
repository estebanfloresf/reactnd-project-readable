import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Post from './Post';
import Comment from '../Comment/Comment';
import {connect} from 'react-redux';
import {postDetailFetchData} from "../../actions/Post";
import {url} from "../../utils/helpers";
import CommentForm from '../Comment/CommentForm';


class PostDetail extends Component {

    state = {
        postID: ''
    };

    componentWillMount() {
        this.setState({
            postID: this.props.match.params.post
        });

    };

    componentDidMount() {

        const fetchURL = url('posts/' + this.state.postID);

        this.props.fetchData(fetchURL);
    }


    render() {

        const {post} = this.props;


        return (



            <div className="d-flex flex-column">

                {this.props.hasErrored ?
                    <div className="alert alert-danger" role="alert"><p>Sorry! There was an error loading the items</p></div> :

                    this.props.isLoading ? <div className="alert alert-info" role="alert"><p>Loading…</p></div> :

                        <div>
                            <div className="p-2">
                                <Link to="/" className="btn btn-secondary btn-sm"><i className="fa fa-arrow-left fa-fw"
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
                            <div className="p-2">
                                <CommentForm/>

                            </div>


                        </div>
                }


            </div>





        );


    }
}

function mapStateToProps(state, ownProps) {

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
// export default  PostDetail;
