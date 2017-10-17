import React, {Component} from 'react';
import {categoriesFetchData, categoryDetailFetchData} from "../../actions/Category";
import {connect} from 'react-redux';
import Link from "react-router-dom/es/Link";
import CategoryList from '../Category/CategoryList';
import Post from "../Post/Post";


class CategoryDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categoryPosts: []
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.categoriesFetchData();
        this.props.categoryDetailFetchData(this.props.match.params.category);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.category !== this.props.match.params.category) {
            this.props.categoryDetailFetchData(this.props.match.params.category);
        }
    }



    render() {
        const categoryName = this.props.match.params.category;
        const {categories, categoryPosts} = this.props;


        return (
            <div className="row flex flex-wrap ">

                <div className="col-md-12">
                    <h4 className="title display-3 text-capitalize"> {categoryName}</h4>

                    <CategoryList categories={categories}/>

                    {categoryPosts.length > 0 ?

                        categoryPosts.map((post) => <Post key={post.id} post={post}/>) :

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
        categoryPosts: state.categoryDetail,
        categoryPostsErrored: state.categoryDetailErrored,
        categoryPostsLoading: state.categoryDetailLoading,
        categories: state.categories,
        categorieshasErrored: state.categoriesErrored,
        categoriesisLoading: state.categoriesLoading,
    };
}

const mapDispatchToProps = {

    categoryDetailFetchData,
    categoriesFetchData,

};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDetail);