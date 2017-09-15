import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Post extends Component{
    render(){
        return(
            <div className="card border-primary mb-3">

                <div className="card-body text-primary">
                    <h4 className="card-title display-4"><Link to="/postdetail/:post">Post title </Link></h4>
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
        )
    }
}

export default Post;