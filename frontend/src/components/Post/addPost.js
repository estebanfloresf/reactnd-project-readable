import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class addPost extends  Component{
     render(){
        return(
            <form action="">
                <div className="form-group">
                    <label htmlFor="postAuthor">Your Name</label>
                    <input type="text" className="form-control" id="postAuthor" placeholder="Author Name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="postTilte">Title</label>
                    <input type="text" className="form-control" id="postTitle" placeholder="Post Title"/>
                </div>
                <div className="form-group">
                    <label htmlFor="postCategory">Category</label>
                    <select className="form-control" id="postCategory">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="postDescription">Description</label>
                    <textarea className="form-control" id="postDescription" rows="3" placeholder="Post Description" />
                </div>
                <div className=" pull-right col-md-3 d-flex flex-row justify-content-around">

                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to="/" className="btn btn-warning">Cancel</Link>
                </div>

            </form>
        )
    }
}

export default addPost;