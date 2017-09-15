import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Post from './Post';

// import Comment from './Comment';


class listPosts extends Component {

    render() {
        return (

            <div className="">
                <div className="col-md-12 d-flex flex-rowalign-content-end" id="order">
                    <div className="p-2">
                        <div className="btn-group" role="group">
                            <button id="btnGroupDrop1" type="button"
                                    className="btn btn-outline-info btn-sm dropdown-toggle" data-toggle="dropdown"
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
                        <Link className="btn btn-primary btn-sm" to="/">Add Post </Link>
                    </div>


                </div>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>

            </div>


        )
    }

}

export default listPosts;