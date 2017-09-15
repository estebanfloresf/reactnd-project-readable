import React, {Component} from 'react';
import {Link} from 'react-router-dom'


class listPosts extends Component {

    render() {
        return (
            <div className="row flex flex-wrap">
                <div className="col-md-12">
                    <h4 className="title">Posts</h4>
                </div>
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
                <div className="col-md-12">

                    <div className="card border-light mb-3">

                        <div className="card-body">
                            <h4 className="card-title">Card title</h4>
                            <p className="card-text">This is a wider card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.</p>


                            <div className="d-flex flex-row justify-content-around">
                                <div className="p-2">
                                    <p className="card-text" id="card-text-info">
                                        <small className="text-muted"><i className="fa fa-user"/> | Author Name</small>
                                    </p>
                                </div>

                                <div className="d-flex flex-row">
                                    <div className="p-2"><small>4 votes |</small></div>
                                    <div className="p-2">
                                        <small className="text-muted"><Link to="/"> <i className="fa fa-thumbs-up"/></Link> </small>
                                    </div>
                                    <div className="p-2">
                                        <small className="text-muted"><Link to="/"> <i className="fa fa-thumbs-down"/></Link> </small>
                                    </div>
                                </div>


                                <div className="p-2">
                                    <p className="card-text">


                                        <small className="text-muted"> <strong> 2</strong> comments | <Link to="/"> <i className="fa fa-comment"/></Link></small>
                                    </p>
                                </div>

                                <div className="p-2">
                                    <p className="card-text">
                                        <small className="text-muted"><i className="fa fa-calendar"/> Last updated 3
                                            mins ago
                                        </small>
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="card border-light mb-3">

                        <div className="card-body">
                            <h4 className="card-title">Card title</h4>
                            <p className="card-text">This is a wider card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.</p>


                            <div className="d-flex flex-row justify-content-around">
                                <div className="p-2">
                                    <p className="card-text" id="card-text-info">
                                        <small className="text-muted"><i className="fa fa-user"/> | Author Name</small>
                                    </p>
                                </div>

                                <div className="d-flex flex-row">
                                    <div className="p-2"><small>4 votes |</small></div>
                                    <div className="p-2">
                                        <small className="text-muted"><Link to="/"> <i className="fa fa-thumbs-up"/></Link> </small>
                                    </div>
                                    <div className="p-2">
                                        <small className="text-muted"><Link to="/"> <i className="fa fa-thumbs-down"/></Link> </small>
                                    </div>
                                </div>


                                <div className="p-2">
                                    <p className="card-text">


                                        <small className="text-muted"> <strong> 2</strong> comments | <Link to="/"> <i className="fa fa-comment"/></Link></small>
                                    </p>
                                </div>

                                <div className="p-2">
                                    <p className="card-text">
                                        <small className="text-muted"><i className="fa fa-calendar"/> Last updated 3
                                            mins ago
                                        </small>
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="card border-light mb-3">

                        <div className="card-body">
                            <h4 className="card-title">Card title</h4>
                            <p className="card-text">This is a wider card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.</p>


                            <div className="d-flex flex-row justify-content-around">
                                <div className="p-2">
                                    <p className="card-text" id="card-text-info">
                                        <small className="text-muted"><i className="fa fa-user"/> | Author Name</small>
                                    </p>
                                </div>

                                <div className="d-flex flex-row">
                                    <div className="p-2"><small>4 votes |</small></div>
                                    <div className="p-2">
                                        <small className="text-muted"><Link to="/"> <i className="fa fa-thumbs-up"/></Link> </small>
                                    </div>
                                    <div className="p-2">
                                        <small className="text-muted"><Link to="/"> <i className="fa fa-thumbs-down"/></Link> </small>
                                    </div>
                                </div>


                                <div className="p-2">
                                    <p className="card-text">


                                        <small className="text-muted"> <strong> 2</strong> comments | <Link to="/"> <i className="fa fa-comment"/></Link></small>
                                    </p>
                                </div>

                                <div className="p-2">
                                    <p className="card-text">
                                        <small className="text-muted"><i className="fa fa-calendar"/> Last updated 3
                                            mins ago
                                        </small>
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>



                </div>

            </div>
        )
    }

}

export default listPosts;