import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {postDetailFetchData} from "../../actions/Post";
import {categoriesFetchData} from "../../actions/Category";
import {connect} from 'react-redux';
import {url} from "../../utils/helpers";


class addPost extends Component {

    constructor(props) {
        super(props);

        this.state = {
            postID: '',
            authorfield: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        if (this.props.match.params.post) {
            this.setState({
                postID: this.props.match.params.post
            });
        }
    };

    componentDidMount() {
        this.getCategories();

        if (this.state.postID) {

            this.getPostID(this.state.postID);
        }

    }

    getCategories() {
        const fetchURL = url('categories');
        this.props.categoriesfetchData(fetchURL);
    }

    getPostID(post) {
        const fetchURL = url('posts/' + post);
        this.props.postfetchData(fetchURL);
    }

    handleSubmit(e) {
        e.preventDefault();


        console.log(e.target.postAuthor.value);
        console.log(e.target.postTitle.value);
        console.log(e.target.postDescription.value);
        console.log(e.target.postCategory.value);
        this.setState({
            authorfield: e.target.postAuthor.value.trim()
        });
    }


    render() {
        const {categories, post} = this.props;
        const {postID, authorfield} = this.state;

        return (

            <div>

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="postAuthor">Your Name</label>
                        <input type="text" className="form-control" id="postAuthor" placeholder="Author Name"
                               value={postID ? post.author : ''}/>
                        {authorfield && <div>This field cannot be blank</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="postTilte">Title</label>
                        <input type="text" className="form-control" id="postTitle" placeholder="Post Title"
                               value={postID ? post.title : ''}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="postCategory">Category</label>
                        <select className="form-control text-capitalize" id="postCategory"
                                value={postID ? post.category : ''}>
                            {
                                this.props.categorieshasErrored ?
                                    <div className="alert alert-danger" role="alert"><p>Sorry! There was an error
                                        loading the categories</p></div> :
                                    this.props.categoriesisLoading ?
                                        <div className="alert alert-info" role="alert"><p>Loading Categories…</p>
                                        </div> :
                                        categories && categories.map((category) => {

                                            return (
                                                <option key={category.name}>{category.name}</option>
                                            )
                                        })
                            }


                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="postDescription">Description</label>
                        <textarea className="form-control" id="postDescription" rows="3" placeholder="Post Description"
                                  value={postID ? post.body : ''}/>
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


function mapStateToProps(state) {
    return {
        categories: state.categories,
        categorieshasErrored: state.categoriesErrored,
        categoriesisLoading: state.categoriesLoading,
        post: state.postDetail,
        posthasErrored: state.postDetailErrored,
        postisLoading: state.postDetailLoading
    };
}

function mapDispatchToProps(dispatch) {
    return {
        categoriesfetchData: (url) => dispatch(categoriesFetchData(url)),
        postfetchData: (url) => dispatch(postDetailFetchData(url))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(addPost);