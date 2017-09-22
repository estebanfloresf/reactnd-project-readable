import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {postsFetchData} from "../../actions";
import {connect} from 'react-redux';
import {formatDate} from "../../utils/helpers";


class Post extends Component {


    render() {


        const post = this.props.posts[0];


        const {posts} = this.props.posts;
        console.log(posts);


        return (
            <div className="card border-primary mb-3">

                <div className="card-body text-primary">
                    <h5>
                        <Link to={`/postdetail/${post.id}`}>{post.title} </Link></h5>
                    <p className="card-text">{post.body}</p>
                    <div className="d-flex flex-row justify-content-around">
                        <div className="p-2">
                            <p className="card-text" id="card-text-info">
                                <small className="text-capitalize"><i className="fa fa-user"/> {post.author}</small>
                            </p>
                        </div>

                        <div className="d-flex flex-row">
                            <div className="p-2">
                                <small>{post.voteScore} votes |</small>
                            </div>
                            <div className="p-2">
                                <small className="text-muted"><Link to="/"> <i
                                    className="fa fa-thumbs-up"/></Link></small>
                            </div>
                            <div className="p-2">
                                <small className="text-muted"><Link to="/"> <i
                                    className="fa fa-thumbs-down"/></Link></small>
                            </div>
                        </div>


                        <div className="p-2">
                            <p className="card-text">


                                <small className="text-muted"><i className="fa fa-comment"/> <strong> 2 </strong>
                                    comments
                                </small>
                            </p>
                        </div>

                        <div className="p-2">
                            <p className="card-text">
                                <small className="text-muted"><i
                                    className="fa fa-calendar"/> {formatDate(post.timestamp)}
                                </small>
                            </p>
                        </div>
                        <div className="p-2"><Link to="/" className="btn btn-info btn-sm"><i className="fa fa-pencil"
                                                                                             aria-hidden="true"/> Edit</Link>
                        </div>
                        <div className="p-2"><Link to="/" className="btn btn-danger btn-sm"><i className="fa fa-trash"
                                                                                               aria-hidden="true"/> Delete</Link>
                        </div>


                    </div>
                </div>


            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    posts: state.posts.filter(post => post.id === ownProps.postID)
});

function mapDispatchToProps(dispatch) {
    return {
        fetchData: (url) => dispatch(postsFetchData(url))

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Post);


