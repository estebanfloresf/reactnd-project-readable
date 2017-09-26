import React, {Component} from 'react';
import {categoryDetailFetchData} from  "../../actions/Category";
import PostList from '../Post/PostList';
import {connect} from 'react-redux';
import {url} from "../../utils/helpers";

class CategoryDetail extends Component {

    state={
        categoryPosts : []
    };


    componentDidMount () {
        window.scrollTo(0, 0);

        const fetchURL = url(this.props.match.params.category+'/posts');
        this.props.categoriesFetch(fetchURL);
    };



    render() {

        const categoryName = this.props.match.params.category;
        const {categories} = this.props;


        return (
            <div className="row flex flex-wrap ">
                <div className="col-md-12">
                    <h4 className="title display-3 text-capitalize"> {categoryName}</h4>
                    <PostList posts={categories}/>
                </div>


            </div>
        )
    }
}

function  mapStateToProps  (state)  {
    return {
        categories: state.categoryDetail,
        categoriesErrored: state.categoryDetailErrored,
        categoriesLoading: state.categoryDetailLoading,

    };
}

function mapDispatchToProps(dispatch){
    return{
        categoriesFetch: (url) => dispatch(categoryDetailFetchData(url))

    }
}


export default connect(mapStateToProps,mapDispatchToProps) (CategoryDetail);