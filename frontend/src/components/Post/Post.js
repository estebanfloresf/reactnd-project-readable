import React from 'react';
import {Link} from 'react-router-dom';
import {formatDate} from "../../utils/helpers";
import {connect} from 'react-redux';
import {postToDelete} from "../../actions/Post";


const mapStateToProps = state => {
    return {
        postToDelete: state.postToDelete,
        comments: state.commentsSuccess
    };
};


const mapDispatchToProps = (dispatch,post) => {

    return {
        fetchData: () => dispatch(postToDelete(post.post))
    };
};

const Post = ({post,fetchData,comments}) => {

    return (

        <div className="card border-primary mb-3">
            <div className="card-body text-primary">
                {/*title*/}
                <div className="d-flex justify-content-end align-items-center">
                    <div className="mr-auto p-2">
                        <h5>
                            <Link to={`/${post.category}/${post.id}`}>{post.title}</Link>
                        </h5>
                    </div>
                    <div className="p-2">
                        <Link to={`/addPost/${post.id}`} id="edit" className="btn btn-info btn-sm"><i
                            className="fa fa-pencil"
                            aria-hidden="true"/></Link>
                    </div>
                    <div className="p-2">

                        <button type="button" id="delete" className="btn btn-danger btn-sm" data-toggle="modal" onClick={()=>fetchData(post)}
                                data-target="#deletePost"
                                data-deletepost={post.id}><i className="fa fa-trash"
                                                             aria-hidden="true"/></button>

                    </div>
                </div>
                {/*Body*/}
                <div className="d-flex">
                    <p className="card-text p-2 text-justify">{post.body}</p>
                </div>
                {/*Controls*/}
                <div className="d-flex flex-row justify-content-around">
                    <div className="p-2">
                        <p className="card-text" id="card-text-info">
                            <small className="text-capitalize"><i className="fa fa-user fa-fw"/> {post.author}</small>
                        </p>
                    </div>

                    <div className="d-flex flex-row">

                        <div className="p-2">
                            <small className="text-muted"><Link to="/"> <i
                                className="fa fa-thumbs-up fa-fw"/></Link></small>
                        </div>
                        <div className="p-2">
                            <small>{post.voteScore} votes</small>
                        </div>
                        <div className="p-2">
                            <small className="text-muted"><Link to="/"> <i
                                className="fa fa-thumbs-down fa-fw "/></Link></small>
                        </div>
                    </div>

                    <div className="p-2">
                        <p className="card-text">


                            <small className="text-muted"><i className="fa fa-comment fa-fw"/> <strong> {comments.length} </strong>
                                comments
                            </small>
                        </p>
                    </div>
                    <div className="p-2">
                        <p className="card-text">

                            <Link to={`/${post.category}`}>
                            <small className="text-muted">
                                <i className="fa fa-tag fa-fw"
                                   aria-hidden="true"/> {post.category}
                            </small>
                            </Link>

                        </p>
                    </div>
                    <div className="p-2">
                        <p className="card-text">
                            <small className="text-muted"><i
                                className="fa fa-calendar fa-fw"/> {formatDate(post.timestamp)}
                            </small>
                        </p>
                    </div>
                </div>
            </div>


        </div>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);


