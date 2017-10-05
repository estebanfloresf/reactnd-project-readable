import React, {Component} from 'react';
import {categoryDetailFetchData} from "../../actions/Category";
import PostList from '../Post/PostList';
import {connect} from 'react-redux';
import {url} from "../../utils/helpers";
import Link from "react-router-dom/es/Link";

class CategoryDetail extends Component {


    componentDidMount() {
        window.scrollTo(0, 0);

        const fetchURL = url(this.props.match.params.category + '/posts');
        this.props.categoriesFetch(fetchURL);
    }


    render() {

        const categoryName = this.props.match.params.category;
        const {categories} = this.props;



        return (
            <div className="row flex flex-wrap ">
                <div className="col-md-12">
                    <h4 className="title display-3 text-capitalize"> {categoryName}</h4>

                    {categories.length > 0 ?

                        <PostList posts={categories}/> :

                        <div className="d-flex align-items-center">
                            <div className="p-2">Whoop's sorry no posts available for <span
                                className="text-capitalize text-bold">{categoryName}</span> category, want to be the
                                                 first?
                            </div>

                            <div className="p-2">
                                <Link className="btn btn-primary btn-sm" to="/addPost"> <i
                                    className="fa fa-plus-circle fa-fw" aria-hidden="true"/>Add Post</Link>
                            </div>

                        </div>

                    }

                </div>


            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        categories: state.categoryDetail,
        categoriesErrored: state.categoryDetailErrored,
        categoriesLoading: state.categoryDetailLoading,

    };
}

function mapDispatchToProps(dispatch) {
    return {
        categoriesFetch: (url) => dispatch(categoryDetailFetchData(url))

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CategoryDetail);