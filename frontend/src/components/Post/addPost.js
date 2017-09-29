import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {postDetailFetchData, createPostDetail, updatePostDetailField} from "../../actions/Post";
import {categoriesFetchData} from "../../actions/Category";
import {connect} from 'react-redux';
import Modal from 'react-modal';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '50%',
        backgroundColor: '#e9ecef',

        width: '500px',
        transform: 'translate(-50%, -50%)'
    }
};

class addPost extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            fieldMissingOpen: false,
            missingauthor: false,
            missingtitle: false,
            missingdesc: false,
            action: ''
        }
    }

    componentDidMount() {
        this.getCategories();

        if (this.props.match.params.post) {
            this.getPostID(this.props.match.params.post);
            this.setState({
                action: 'PUT'
            })
        } else {
            this.props.createPostDetail();
            this.setState({
                action: 'POST'
            })
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

    }

    openMissingFields = () => {
        this.setState({
            fieldMissingOpen: true
        })
    };

    closeModal = () => {
        this.setState({
            fieldMissingOpen: false
        })
    };

    handleSubmit(post, e) {
        e.preventDefault();
        if (post.author && post.title && post.body) {
            console.log(post.author.trim().toLowerCase());
        }
        else {


            if (post.author.trim() === '') {
                this.setState({
                    missingauthor: true
                })
            }
            if (post.title.trim() === '') {
                this.setState({
                    missingtitle: true
                })
            }
            if (post.body.trim() === '') {
                this.setState({
                    missingbody: true
                })
            }
            this.openMissingFields();


        }
    }


    render() {
        const {categories, post} = this.props;
        const {fieldMissingOpen,missingauthor,missingtitle,missingbody} = this.state;



        return (

            <div>

                <Modal
                    style={customStyles}
                    overlayClassName='overlay'
                    isOpen={fieldMissingOpen}
                    onRequestClose={this.closeModalFields}
                    contentLabel='Modal'
                >


                        <div className="modal-header">
                            <h5 className="modal-title">Form Incomplete</h5>
                            <button type="button" className="close" aria-label="Close" onClick={this.closeModal}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="text-danger">{missingauthor? 'Your author name is missing': ''}</div>
                            <div className="text-danger">{missingtitle? 'Your post title is missing': ''}</div>
                            <div className="text-danger">{missingbody? 'Your post body is missing': ''}</div>

                        </div>




                </Modal>


                <form onSubmit={this.handleSubmit.bind(this, post)}>
                    <div className="form-group">
                        <label htmlFor="postAuthor">Your Name</label>
                        <input type="text" className="form-control" id="postAuthor" placeholder="Author Name"
                               value={post.author} onChange={this.onChange.bind(this, 'author')}/>


                    </div>
                    <div className="form-group">
                        <label htmlFor="postTilte">Title</label>
                        <input type="text" className="form-control" id="postTitle" placeholder="Post Title"
                               value={post.title} onChange={this.onChange.bind(this, 'title')}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="postCategory">Category</label>
                        <select className="form-control text-capitalize" id="postCategory"
                                value={post.category} onChange={this.onChange.bind(this, 'category')}>
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
                                  value={post.body} onChange={this.onChange.bind(this, 'body')}/>
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

const mapDispatchToProps = {
    categoriesFetchData,
    postDetailFetchData,
    createPostDetail,
    updatePostDetailField
};


export default connect(mapStateToProps, mapDispatchToProps)(addPost);