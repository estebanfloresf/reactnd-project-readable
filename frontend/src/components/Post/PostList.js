import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Post from './Post';
import {fetch_posts} from "../../utils/api";


class listPosts extends Component {

    state = {
        posts: {}
    };


    componentDidMount() {

        fetch_posts()
            .then((posts) => this.setState(() => ({
                posts,

            })));
    }


    render() {
        return (

            <div className="">
                <div className="col-md-12 d-flex flex-rowalign-content-end" id="order">
                    <div className="p-2">
                        <div className="btn-group" role="group">
                            <button id="btnGroupDrop1" type="button"
                                    className="btn btn-outline-info btn-sm dropdown-toggle"                                                  data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                Order By
                            </button>
                            <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                <Link className="dropdown-item" to="/">Date</Link>
                                <Link className="dropdown-item" to="/">Scores</Link>

                            </div>
                        </div>
                    </div>


                    <div className="p-2">
                        <Link className="btn btn-primary btn-sm" to="/addPost/post">Add Post <i
                            className="fa fa-plus-circle" aria-hidden="true"/></Link>
                    </div>


                </div>

                {this.state.posts.length > 0 && this.state.posts.map((post) => {
                    return <Post key={post.id}/>
                })}


            </div>


        )
    }

}

export default listPosts;