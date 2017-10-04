import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {postDetailFetchData, createPostDetail, updatePostDetailField, insertPostData} from "../../actions/Post";
import {categoriesFetchData} from "../../actions/Category";


import {connect} from 'react-redux';


class addPost extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);


        this.state = {
            fieldMissingOpen: false,
            missingauthor: false,
            missingtitle: false,
            missingdesc: false,
            action: '',


        };
    }

    componentDidMount() {
        this.getCategories();

        if (this.props.match.params.post) {
            this.getPostID(this.props.match.params.post);
            this.setState({
                action: 'PUT'
            });
        } else {
            this.props.createPostDetail();
            this.setState({
                action: 'POST'
            });
        }


    }

    getCategories() {

        this.props.categoriesFetchData();
    }

    getPostID(postID) {

        this.props.postDetailFetchData(postID);


    }

    onChange(field, e) {
        this.props.updatePostDetailField(field, e.currentTarget.value);

        if (field === 'author') {
            this.setState({
                missingauthor: false
            });
        }
        if (field === 'title') {
            this.setState({
                missingtitle: false
            });
        }
        if (field === 'body') {

            this.setState({
                missingbody: false
            });
        }


    }


    handleSubmit(post, e) {
        e.preventDefault();
        if (post.author && post.title && post.body) {

            //    make the call to post/put the post item

            this.props.insertPostData(post, this.state.action);



        }
        else {

            if (post.author.trim() === '') {
                this.setState({
                    missingauthor: true
                });
            }
            if (post.title.trim() === '') {
                this.setState({
                    missingtitle: true
                });
            }
            if (post.body.trim() === '') {
                this.setState({
                    missingbody: true
                });
            }

        }
    }


    render() {
        const {categories, post, insertPostSuccess} = this.props;
        const {missingauthor, missingtitle, missingbody} = this.state;
        console.log(insertPostSuccess);


        return (

            <div>


                <form onSubmit={this.handleSubmit.bind(this, post)}>
                    <div className="form-group">
                        <label htmlFor="postAuthor"/>Your Name
                        <input type="text" className="form-control" id="postAuthor" placeholder="Author Name"
                               value={post.author} onChange={this.onChange.bind(this, 'author')}/>
                        {missingauthor && <div className="text-danger">
                            <small>You must provide an author</small>
                        </div>}


                    </div>
                    <div className="form-group">
                        <label htmlFor="postTilte">Title</label>
                        <input type="text" className="form-control" id="postTitle" placeholder="Post Title"
                               value={post.title} onChange={this.onChange.bind(this, 'title')}/>
                        {missingtitle && <div className="text-danger">
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
                        {missingbody && <div className="text-danger">
                            <small>You must provide a description</small>
                        </div>}
                    </div>
                    <div className=" pull-right col-md-3 d-flex flex-row justify-content-around">

                        {/*<button type="submit" className="btn btn-primary">Submit</button>*/}
                        <Link to="/" className="btn btn-light">Cancel</Link>
                        <button type="submit" className="btn btn-primary" data-toggle="modal"
                                data-target="#exampleModal" data-submit="submit">Submit
                        </button>
                    </div>

                </form>



                     <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel"
                                        aria-hidden="false">


                             <div className="modal-dialog" role="document">
                                 <div className="modal-content">
                                     <div className="modal-header">
                                         <h5 className="modal-title" id="exampleModalLabel">{this.props.insertPostSuccess ?
                                             <div>Success</div> : <div>Whoops something went wrong</div>} </h5>
                                         <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                             <span aria-hidden="true">&times;</span>
                                         </button>
                                     </div>
                                     <div className="modal-body">
                                         <form>

                                             <div className="form-group">
                                                 {
                                                     this.props.insertPostLoading ?
                                                         <div className="alert alert-light">Loading</div> :
                                                         this.props.insertPostSuccess ?
                                                             <div className="alert alert-success">Your post
                                                                 <strong> {this.props.insertPostSuccess.title}</strong> has been
                                                                 insertPostSuccess</div> :
                                                             this.props.insertPostErrored ?
                                                                 <div className="alert alert-danger">Sorry, there was a problem
                                                                     creating your
                                                                     post</div> : <div>Some fields are missing</div>

                                                 }
                                             </div>
                                         </form>
                                     </div>

                                 </div>
                             </div>



                </div>


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
    insertPostData
};


export default connect(mapStateToProps, mapDispatchToProps)(addPost);