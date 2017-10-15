import React, {Component} from 'react';
import {categoriesFetchData, categoryDetailFetchData} from "../../actions/Category";
import PostList from '../Post/PostList';
import {connect} from 'react-redux';
import {url} from "../../utils/helpers";
import Link from "react-router-dom/es/Link";
import CategoryList from '../Category/CategoryList';



class CategoryDetail extends Component {

    constructor(props){
        super(props);
        this.state ={
            categoryPosts: []
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.getCategories();
        this.props.categoriesFetch(this.props.match.params.category);
    }

    componentDidUpdate(prevProps){
        if(prevProps.match.params.category !==this.props.match.params.category){
            this.props.categoriesFetch(this.props.match.params.category );
        }
    }

    getCategories(){
        const fetchURL = url('categories');
        this.props.categoriesfetchData(fetchURL);
    }

    render() {
        const categoryName = this.props.match.params.category;
        const {categories,categoryPosts} = this.props;

        return (
            <div className="row flex flex-wrap ">

                  <div className="col-md-12">
                        <h4 className="title display-3 text-capitalize"> {categoryName}</h4>

                        <CategoryList categories={categories}/>

                        {categoryPosts.length > 0 ?

                            <PostList posts={categoryPosts}/> :

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
        categories:state.categories,
        categorieshasErrored: state.categoriesErrored,
        categoriesisLoading: state.categoriesLoading,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        categoriesFetch: (url) => dispatch(categoryDetailFetchData(url)),
        categoriesfetchData: (url) => dispatch(categoriesFetchData(url)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDetail);