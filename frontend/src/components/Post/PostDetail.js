import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Post from './Post';
import Comment from '../Comment/Comment';

class PostDetail extends Component {
    render() {
        return (
            <div>

                <div className="col-md-12">
                    <Link to="/" className="btn btn-secondary btn-sm">Back to Home Page</Link>

                </div>
                <div className="col-md-12">

                    <Post/>
                    <Comment/>
                </div>

            </div>



        )
    }
}

export default PostDetail;
