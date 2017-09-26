import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {postsFetchData} from "../../actions/Post";
import {categoriesFetchData} from "../../actions/Category";
import { connect } from 'react-redux';
import {url} from "../../utils/helpers";


class addPost extends  Component{

    componentDidMount(){
        this.getCategories();
        // this.getPosts();

    }

    getCategories(){

        const fetchURL = url('categories');
        this.props.categoriesfetchData(fetchURL);


    }



     render(){
         const {categories} = this.props;
         console.log(this.props);


        return(
            <form action="POST">
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
                    <select className="form-control text-capitalize" id="postCategory">
                        {categories && categories.map((category) =>{
                            return(
                                <option key={category.name}>{category.name}</option>
                            )
                        })}


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



function  mapStateToProps  (state)  {
    return {
        categories:state.categories,
        categorieshasErrored: state.categoriesErrored,
        categoriesisLoading: state.categoriesLoading,
        posts:state.posts,
        postshasErrored: state.postsErrored,
        postsisLoading: state.postsLoading
    };
}

function mapDispatchToProps(dispatch){
    return{
        categoriesfetchData: (url) => dispatch(categoriesFetchData(url)),
        postsfetchData: (url) => dispatch(postsFetchData(url))
    }
}



export default connect(mapStateToProps,mapDispatchToProps) (addPost);