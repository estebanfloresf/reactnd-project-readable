import React from 'react';
import {Link} from 'react-router-dom';
import {formatDate} from "../../utils/helpers";
import {editComment} from "../../actions/Comment";
import {connect} from 'react-redux';


const mapDispatchToProps = (dispatch,comment) => {

    return {
        fetchData: () => dispatch(editComment(comment.comment))
    };
};

const Comment = ({fetchData,comment}) =>{
    return(
        <div className="col-md-10">
            <div className="card border-light mb-6">
                <div className="card-body">
                    <div className="d-flex">
                        <p className="card-text p-2">
                            {comment.body}
                        </p>

                    </div>
                    <div className="d-flex flex-row justify-content-around">
                        <div className="p-2">
                            <p className="card-text" id="card-text-info">
                                <small className="text-muted text-capitalize"><i className="fa fa-user fa-fw"/>{comment.author}</small>
                            </p>
                        </div>
                        <div className="d-flex flex-row">
                            <div className="d-flex flex-row">

                                <div className="p-2">
                                    <small className="text-muted"><Link to="/"> <i
                                        className="fa fa-thumbs-up fa-fw"/></Link></small>
                                </div>
                                <div className="p-2">
                                    <small>{comment.voteScore} votes</small>
                                </div>
                                <div className="p-2">
                                    <small className="text-muted"><Link to="/"> <i
                                        className="fa fa-thumbs-down fa-fw "/></Link></small>
                                </div>
                            </div>

                        </div>
                        <div className="p-2">
                            <p className="card-text">
                                <small className="text-muted"><i className="fa fa-calendar fa-fw"/> {formatDate(comment.timestamp)}
                                </small>
                            </p>
                        </div>
                        <div className="p-2">
                            <button  id="edit" className="btn btn-info btn-sm"><i
                                className="fa fa-pencil"
                                aria-hidden="true" data-target="#commentModal" data-toggle="modal" onClick={()=> fetchData(comment)}/></button>
                        </div>
                        <div className="p-2">
                            <button id="delete" className="btn btn-danger btn-sm" data-target="#deleteComment" data-toggle="modal">
                                <i className="fa fa-trash"   aria-hidden="true"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default connect(null,mapDispatchToProps)(Comment);