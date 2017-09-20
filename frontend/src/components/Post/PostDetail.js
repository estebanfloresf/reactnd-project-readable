import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Post from './Post';
import Comment from '../Comment/Comment';

class PostDetail extends Component {


    render() {

        const postID = this.props.match.params.post;
        return (
            <div className="d-flex flex-column">

                <div className="p-2">
                    <Link to="/" className="btn btn-secondary btn-sm">Back to Home Page</Link>

                </div>
                <div className="p-2">

                    <Post key={postID} postID={postID}/>
                </div>
                <div className="p-2">
                    <Comment/>

                </div>


            </div>



        )
    }
}

export default PostDetail;
