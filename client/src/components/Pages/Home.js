import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Category from '../Category/Category';
import {commentsFetchData, insertCommentSuccessAction, deleteCommentSuccess} from '../../actions/Comment';
import {postsFetchData} from "../../actions/Post";
import DeletePost from "../Post/deletePost";
import Post from "../Post/Post";
import {categoriesFetchData} from "../../actions/Category";
import {connect} from 'react-redux';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {order: 'scores'};

    }


    componentDidMount() {
        this.props.categoriesFetchData();
        this.props.postsFetchData();
        this.props.insertCommentSuccessAction(false);
        this.props.deleteCommentSuccess(false);
    }

    orderPosts(e) {
        e.preventDefault();
        this.setState({order: e.target.value});

        if (e.target.value === 'date') {
            this.props.posts.sort(function (a, b) {
                return (a.timestamp >= b.timestamp) ? -1 : ((b.timestamp > a.timestamp) ? 1 : 0);
            });
        }
        if (e.target.value === 'scores') {
            this.props.posts.sort(function (a, b) {
                return (a.voteScore >= b.voteScore) ? -1 : ((b.voteScore > a.voteScore) ? 1 : 0);
            });
        }
    }

    render() {
        const {categories, posts, comments} = this.props;

        return (

            <div className="container">

                <div className="jumbotron">
                    <div className="container">
                        <h1 className="display-3">Readable Project</h1>
                        <p>This is the readable project from the Udacity React Nanodegree Program, in this web app you
                            will be able
                            to post content to predefined categories, comment on your posts and other user's posts, and
                            vote on posts and comments. You will also be able to edit and delete posts and comments.
                        </p>
                        <p><Link className="btn btn-primary btn-lg" to="/addPost"> <i
                            className="fa fa-plus-circle fa-fw" aria-hidden="true"/>Add Post</Link></p>
                    </div>
                </div>


                <div className="row ">
                    <div className="col-md-12">

                        <p className="title display-3">Categories</p>
                        <div className="col-md-12 d-flex flex-wrap">
                            {
                                categories.length > 0 ?

                                    categories.map((category) => {
                                            return (<Category key={category.name} category={category}/>)
                                        }
                                    )

                                    : this.props.categorieshasErrored ?
                                    <div><p>Sorry! There was an error loading the categories</p></div>
                                    : this.props.categoriesisLoading && <p>Loading…</p>

                            }
                        </div>
                    </div>
                </div>

                <div className="row flex flex-wrap">
                    <div className="col-md-12">
                        <p className="title display-3">Posts</p>

                        <div className="col-md-12 d-flex flex-row align-content-end" id="order">
                            <div className="p-2">

                                <select className="btn btn-outline-info btn-sm dropdown-toggle" value={this.state.order}
                                        onChange={this.orderPosts.bind(this)}>
                                    <option key="scores" value="scores">Scores</option>
                                    <option key="date" value="date">Date</option>
                                </select>


                            </div>
                            <div className="p-2">
                                <Link className="btn btn-primary btn-sm" to="/addPost"> <i
                                    className="fa fa-plus-circle fa-fw" aria-hidden="true"/>Add Post</Link>
                            </div>

                        </div>

                        {posts.length > 0 ?
                            posts.map((post) => {

                                return <Post key={post.id} post={post} comments={comments}/>
                            })
                            :
                            this.props.postsisLoading ?
                                <div className="p-2">
                                    Loading
                                </div>
                                :
                                this.props.postshasErrored ?
                                    <div><p>Sorry! There was an error loading the items</p></div>

                                    :
                                    <div className="p-2">Whoop's sorry no posts available, want to be the first?</div>
                        }


                    </div>

                </div>

                <DeletePost/>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        categories: state.categories,
        categorieshasErrored: state.categoriesErrored,
        categoriesisLoading: state.categoriesLoading,
        posts: state.posts.filter((post) => post.deleted === false),
        postshasErrored: state.postsErrored,
        postsisLoading: state.postsLoading,
        comments: state.commentsSuccess

    };
}

const mapDispatchToProps = {
    categoriesFetchData,
    postsFetchData,
    commentsFetchData,
    insertCommentSuccessAction,
    deleteCommentSuccess,

};


export default connect(mapStateToProps, mapDispatchToProps)(Home);