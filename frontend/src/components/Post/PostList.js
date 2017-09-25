import React from 'react';
import {Link} from 'react-router-dom';
import Post from './Post';


export default function PostList ({posts}) {



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


                {posts  && posts.map((post) => {
                    return <Post key={post.id}  post={post}/>
                })}


            </div>


        )


}



