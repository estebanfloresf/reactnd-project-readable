import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Comment extends Component{
    render(){
        return(
            <div className="col-md-8">

                <div className="card border-light mb-3">

                    <div className="card-body">
                        <h4 className="card-title">Comment title</h4>
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
                                    <small className="text-muted"><i className="fa fa-calendar"/> Last updated 3
                                        mins ago
                                    </small>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

export default Comment;