import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PostList from '../Post/PostList';
import CategoryList from '../Category/CategoryList';
import {url} from "../../utils/helpers";
import {postsFetchData} from "../../actions/Post";
import {categoriesFetchData} from "../../actions/Category";
import { connect } from 'react-redux';
import DeletePost from "../Post/deletePost";



class Home extends Component {

    componentDidMount(){
        this.getCategories();
        this.getPosts();
    }

    componentDidUpdate(prevProps){
        console.log(prevProps.posts);
    }


    getCategories(){
        const fetchURL = url('categories');
        this.props.categoriesfetchData(fetchURL);
    }
    getPosts(){

        this.props.postsfetchData();
    }

    render() {
        const {categories,posts} = this.props;

        if(this.props.categorieshasErrored){
            return <div><p>Sorry! There was an error loading the categories</p></div>
        }

        if (this.props.categoriesisLoading) {
            return <p>Loading…</p>;
        }
        if(this.props.postshasErrored){
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
                        <p><Link className="btn btn-primary btn-lg" to="/addPost"> <i className="fa fa-plus-circle fa-fw" aria-hidden="true"/>Add Post</Link></p>
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

                        <PostList posts={posts}/>

                    </div>

                </div>

                <DeletePost />
            </div>

        )
    }
}

function  mapStateToProps  (state)  {
    return {
        categories:state.categories,
        categorieshasErrored: state.categoriesErrored,
        categoriesisLoading: state.categoriesLoading,
        posts:state.posts.filter((post)=> post.deleted===false),
        postshasErrored: state.postsErrored,
        postsisLoading: state.postsLoading,

    };
}

function mapDispatchToProps(dispatch){
    return{
        categoriesfetchData: (url) => dispatch(categoriesFetchData(url)),
        postsfetchData: (url) => dispatch(postsFetchData(url))
    }
}



export default connect (mapStateToProps,mapDispatchToProps) (Home);