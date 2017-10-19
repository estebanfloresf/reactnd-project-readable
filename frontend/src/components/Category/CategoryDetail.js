import React, {Component} from 'react';
import {categoriesFetchData, categoryDetailFetchData} from "../../actions/Category";
import {connect} from 'react-redux';
import Category from '../Category/Category';
import Post from "../Post/Post";


class CategoryDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categoryPosts: [],
            order: 'scores',
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

    addPost(category, e) {
        e.preventDefault();
        this.props.history.push('/addPost');

    }

    orderPosts(e) {
        e.preventDefault();
        this.setState({order: e.target.value});

        if (e.target.value === 'date') {
            this.props.categoryPosts.sort(function (a, b) {
                return (a.timestamp >= b.timestamp) ? -1 : ((b.timestamp > a.timestamp) ? 1 : 0);
            });
        }
        if (e.target.value === 'scores') {
            this.props.categoryPosts.sort(function (a, b) {
                return (a.voteScore >= b.voteScore) ? -1 : ((b.voteScore > a.voteScore) ? 1 : 0);
            });
        }
    }


    render() {
        const categoryName = this.props.match.params.category;
        const {categories, categoryPosts} = this.props;


        return (
            <div className="row flex flex-wrap ">

                <div className="col-md-12">
                    <h4 className="title display-3 text-capitalize"> {categoryName}</h4>

                    <div className="col-md-12 d-flex flex-row align-items-center" id="order">
                        <div className="p-2">

                            <select className="btn btn-outline-info btn-sm dropdown-toggle" value={this.state.order}
                                    onChange={this.orderPosts.bind(this)}>
                                <option key="scores" value="scores">Scores</option>
                                <option key="date" value="date">Date</option>
                            </select>


                        </div>
                        <div className="p-2">
                            <div className="col-md-12 d-flex flex-wrap">
                                {categories && categories.map(
                                    (category) => {
                                        return <Category key={category.name} category={category}/>
                                    }
                                )}
                            </div>
                        </div>

                    </div>


                    {categoryPosts.length > 0 ?

                        categoryPosts.map((post) => <Post key={post.id} post={post}/>) :

                        <div className="d-flex align-items-center">
                            <div className="p-2">Whoop's sorry no posts available for <span
                                className="text-capitalize text-bold">{categoryName}</span> category, want to be the
                                first?
                            </div>

                        </div>
                    }
                </div>

                <button id="addcomment" value="addComment" className="btn btn-primary" data-toggle="modal"
                        data-target="#commentModal" data-comment="addComment"
                        onClick={this.addPost.bind(this, categoryName)}>
                    <i className="fa fa-plus" aria-hidden="true"/>
                </button>

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