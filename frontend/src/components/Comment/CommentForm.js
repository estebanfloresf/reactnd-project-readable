import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class CommentForm extends Component {
    render() {
        return (

                <div className="card border-light mb-3">
                    <form action="">
                        <div className="form-group">
                            <label htmlFor="postAuthor">Your Name</label>
                            <input type="text" className="form-control" id="comentAuthor" placeholder="Author Name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="commentTitle">Title</label>
                            <input type="text" className="form-control" id="commentTitle" placeholder="Comment Title"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="commentDescription">Description</label>
                            <textarea className="form-control" id="commentDescription" rows="3"
                                      placeholder="Comment Description"/>
                        </div>
                        <div className=" pull-right col-md-3 d-flex flex-row justify-content-around">

                            <button type="submit" className="btn btn-primary">Submit</button>
                            <Link to="/" className="btn btn-warning">Cancel</Link>
                        </div>

                    </form>
                </div>

        )
    }
}

export default CommentForm;