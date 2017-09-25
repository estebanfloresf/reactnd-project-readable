import React, {Component} from 'react';
// import {Link} from 'react-router-dom'
// import Post from "../Post/Post";
import PostList from '../Post/PostList';

class CategoryDetail extends Component {


    componentDidMount () {
        window.scrollTo(0, 0);



    };



    render() {

        const categoryName = this.props.match.params.category;

        return (
            <div className="row flex flex-wrap ">
                <div className="col-md-12">
                    <h4 className="title display-3 text-capitalize"> {categoryName}</h4>
                    <PostList/>
                </div>


            </div>
        )
    }
}

export default CategoryDetail;