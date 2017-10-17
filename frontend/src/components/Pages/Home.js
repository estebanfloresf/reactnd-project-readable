import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {commentsFetchData} from '../../actions/Comment';

import CategoryList from '../Category/CategoryList';
import {postsFetchData} from "../../actions/Post";
import {categoriesFetchData} from "../../actions/Category";
import {connect} from 'react-redux';
import DeletePost from "../Post/deletePost";
import Post from "../Post/Post";


class Home extends Component {

    componentDidMount() {
        this.props.categoriesFetchData();
        this.props.postsFetchData();
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps.posts);
        console.log(this.props.posts);
    }


        render() {
        const {categories, posts, comments} = this.props;

        if (this.props.categorieshasErrored) {
            return <div><p>Sorry! There was an error loading the categories</p></div>
        }

        if (this.props.categoriesisLoading) {
            return <p>Loading…</p>;
        }
        if (this.props.postshasErrored) {
            return <div><p>Sorry! There was an error loading the items</p></div>
        }

        if (this.props.postsisLoading) {
            return <p>Loading…</p>;
        }

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

                        <CategoryList categories={categories}/>
                    </div>
                </div>

                <div className="row flex flex-wrap">
                    <div className="col-md-12">
                        <p className="title display-3">Posts</p>

                        <div className="col-md-12 d-flex flex-row align-content-end" id="order">
                            <div className="p-2">
                                <div className="btn-group" role="group">
                                    <button id="btnGroupDrop1" type="button"
                                            className="btn btn-outline-info btn-sm dropdown-toggle"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Order By
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                        <Link className="dropdown-item" to="/">Date</Link>
                                        <Link className="dropdown-item" to="/">Scores</Link>

                                    </div>
                                </div>
                            </div>
                            <div className="p-2">
                                <Link className="btn btn-primary btn-sm" to="/addPost"> <i
                                    className="fa fa-plus-circle fa-fw" aria-hidden="true"/>Add Post</Link>
                            </div>

                        </div>

                        {posts.length > 0 ? posts.map((post) => {

                                return <Post key={post.id} post={post} comments={comments}/>
                            }) :
                            <div className="p-2">Whoop's sorry no posts available, want to be the
                                                 first?
                            </div>

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
    commentsFetchData
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);