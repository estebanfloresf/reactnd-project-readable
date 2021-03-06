import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {postDetailFetchData, createPostDetail, updatePostDetailField, insertPostData} from "../../actions/Post";
import {insertCommentSuccessAction, deleteCommentSuccess} from "../../actions/Comment";
import {categoriesFetchData} from "../../actions/Category";
import {connect} from 'react-redux';


class addPost extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            fieldMissingOpen: false,
            authorField: false,
            titleField: false,
            bodyField: false,
            action: '',
            category: ''
        };
    }


    componentDidMount() {

        this.props.insertCommentSuccessAction(false);
        this.props.deleteCommentSuccess(false);
        this.props.categoriesFetchData();
        if (this.props.match.params.post) {

            this.props.postDetailFetchData(this.props.match.params.post);
            this.setState({
                action: 'PUT',

            });
        } else {
            this.props.createPostDetail();
            this.setState({
                action: 'POST'
            });
        }
    }

    onChange(field, e) {
        this.props.updatePostDetailField(field, e.currentTarget.value);

        if (field === 'author') {
            this.setState({
                authorField: false
            });
        }
        if (field === 'title') {
            this.setState({
                titleField: false
            });
        }
        if (field === 'body') {

            this.setState({
                bodyField: false
            });
        }
    }

    handleSubmit(post,e) {
        e.preventDefault();

        if (post.author && post.title && post.body) {
            //    make the call to post/put the post item
            this.props.insertPostData(post, this.state.action);
            this.props.history.push(`/${post.category}/${post.id}`)

        }
        else {
            if (post.author.trim() === '') {
                this.setState({
                    authorField: true
                });
            }
            if (post.title.trim() === '') {
                this.setState({
                    titleField: true
                });
            }
            if (post.body.trim() === '') {
                this.setState({
                    bodyField: true
                });
            }
        }
    }

    render() {
        const {categories, post,  insertPostLoading,insertPostErrored} = this.props;
        const {authorField, titleField, bodyField} = this.state;


        return (

            <div>
                {
                   insertPostLoading ? <div className="text-info">Loading</div> :
                        // this.props.insertPostSuccess ? history.push(`/${post.category}/${post.id}`) :
                          insertPostErrored &&
                            <div className="text-danger">There has been an error</div>

                }
                <form onSubmit={this.handleSubmit.bind(this,post)}>
                    <div className="form-group">
                        <label htmlFor="postAuthor"/>Your Name
                        <input type="text" className="form-control" id="postAuthor" placeholder="Author Name"
                               value={post.author} onChange={this.onChange.bind(this, 'author')}/>
                        {authorField && <div className="text-danger">
                            <small>You must provide an author</small>
                        </div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="postTilte">Title</label>
                        <input type="text" className="form-control" id="postTitle" placeholder="Post Title"
                               value={post.title} onChange={this.onChange.bind(this, 'title')}/>
                        {titleField && <div className="text-danger">
                            <small>You must provide a title</small>
                        </div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="postCategory">Category</label>
                        {
                            this.props.categorieshasErrored ?
                                <p className="alert alert-danger" role="alert">Sorry! There was an error
                                    loading the categories</p> :
                                this.props.categoriesisLoading ?
                                    <p className="alert alert-info" role="alert">Loading Categories...</p> :
                                    <select className="form-control text-capitalize" id="postCategory"
                                            value={post.category} onChange={this.onChange.bind(this, 'category')}>{
                                        categories && categories.map((category) => {

                                            return (
                                                <option key={category.name}>{category.name}</option>
                                            )
                                        })
                                    }
                                    </select>
                        }

                    </div>
                    <div className="form-group">
                        <label htmlFor="postDescription">Description</label>
                        <textarea className="form-control" id="postDescription" rows="3" placeholder="Post Description"
                                  value={post.body} onChange={this.onChange.bind(this, 'body')}/>
                        {bodyField && <div className="text-danger">
                            <small>You must provide a description</small>
                        </div>}
                    </div>
                    <div>


                        <button type="submit" className="btn btn-primary btn-lg btn-block" data-toggle="modal"
                                data-submit="submit">Save
                        </button>
                        <Link to="/" className="btn btn-light btn-lg btn-block">Cancel</Link>
                    </div>

                </form>
            </div>

        );

    }
}


function mapStateToProps(state) {
    return {
        categories: state.categories,
        categorieshasErrored: state.categoriesErrored,
        categoriesisLoading: state.categoriesLoading,
        post: state.postDetail,
        posthasErrored: state.postDetailErrored,
        postisLoading: state.postDetailLoading,
        insertPostSuccess: state.insertPostSuccess,
        insertPostLoading: state.insertPostLoading,
        insertPostErrored: state.insertPostErrored
    };
}

const mapDispatchToProps = {
    categoriesFetchData,
    postDetailFetchData,
    createPostDetail,
    updatePostDetailField,
    insertPostData,
    insertCommentSuccessAction,
    deleteCommentSuccess
};

export default connect(mapStateToProps, mapDispatchToProps)(addPost);