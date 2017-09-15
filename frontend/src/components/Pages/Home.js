import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import PostList from '../Post/PostList';
import CategoryList from '../Category/CategoryList';


class noPage extends Component {
    render() {

        return (

            <div className="container">

                <div className="jumbotron">
                    <div className="container">
                        <h1 className="display-3">Readable Project</h1>
                        <p>This is the readable project from the Udacity React Nanodegree Program, in this web app you
                            will be able
                            to post content to predefined categories, comment on your posts and other users' posts, and
                            vote on posts and comments. You will also be able to edit and delete posts and comments.
                        </p>
                        <p><Link className="btn btn-primary btn-lg" to="/">Add Post</Link></p>
                    </div>
                </div>


                <CategoryList/>

                <div className="row flex flex-wrap">
                    <div className="col-md-12">
                        <h4 className="title display-3">Posts</h4>
                        <PostList/>
                    </div>

                </div>


            </div>




        )
    }
}

export default noPage;