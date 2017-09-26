import React from 'react';
import {Link} from 'react-router-dom';
// // import {postsFetchData} from "../../actions";
// import {connect} from 'react-redux';
import {formatDate} from "../../utils/helpers";




export default function Post ({post}) {



        return (
            <div className="card border-primary mb-3">

                <div className="card-body text-primary">



                    {/*title*/}
                    <div className="d-flex justify-content-end">
                        <div className="mr-auto p-2">
                            <h5>
                                <Link to={`/postdetail/${post.id}`}>{post.title}</Link>
                            </h5>
                        </div>
                        <div className="p-2">
                            <Link to={`/addPost/${post.id}`} className="btn btn-info btn-sm"><i
                                className="fa fa-pencil"
                                aria-hidden="true"/></Link>
                        </div>
                        <div className="p-2">
                            <Link to="/" className="btn btn-danger btn-sm"><i className="fa fa-trash"
                                                                              aria-hidden="true"/>
                            </Link>
                        </div>
                    </div>
                    {/*Body*/}
                    <div className="d-flex">

                        <p className="card-text p-2">{post.body}</p>
                    </div>
                    {/*Controls*/}
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


                                <small className="text-muted">
                                    <i className="fa fa-tag"
                                       aria-hidden="true"></i> {post.category}
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


                    </div>
                </div>


            </div>
        )


}


