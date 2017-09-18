import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import PostList from '../Post/PostList';
import CategoryList from '../Category/CategoryList';




class Home extends Component {


    render() {

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
                        <p><Link className="btn btn-primary btn-lg" to="/addPost/:post">Add Post <i className="fa fa-plus-circle" aria-hidden="true"/></Link></p>
                    </div>
                </div>


                <CategoryList/>

                <div className="row flex flex-wrap">
                    <div className="col-md-12">
                        <p className="title display-3">Posts</p>
                        <PostList/>
                    </div>

                </div>



            </div>




        )
    }
}

export default Home;