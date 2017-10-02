import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Post from './Post';
import Comment from '../Comment/Comment';
import {connect} from 'react-redux';
import {postDetailFetchData} from "../../actions/Post";
import Modal from 'react-modal';
import CommentForm from '../Comment/CommentForm';

const customStyles = {
    content: {
        top: '20%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '50%',
        backgroundColor: '#e9ecef',

        width: '500px',
        transform: 'translate(-50%, -50%)'
    }
};

class PostDetail extends Component {

    constructor(props) {
        super(props);

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

        this.state = {
            postID: '',
            addComment: false
        };
    }

    componentWillMount() {
        this.setState({
            postID: this.props.match.params.post
        });

    }

    componentDidMount() {


        this.props.fetchData(this.state.postID);
    }


    openModal(){
        window.scrollTo(0, 0);

        this.setState({
            addComment: true
        });
    }
    
    closeModal(){
        this.setState({
            addComment: false
        });
    }
    
    render() {

        const {post} = this.props;
        const {addComment} = this.state;


        return (



            <div className="d-flex flex-column">

                {this.props.hasErrored ?
                    <div className="alert alert-danger" role="alert"><p>Sorry! There was an error loading the items</p></div> :

                    this.props.isLoading ? <div className="alert alert-info" role="alert"><p>Loading…</p></div> :

                        <div>
                            <div className="p-2">
                                <Link to="/" className="btn btn-secondary btn-sm"><i className="fa fa-arrow-left fa-fw"
                                                                                     aria-hidden="true"/>
                                       Back to Home Page</Link>

                            </div>

                            <div className="p-2">


                                <Post key={post.id} post={post}/>
                            </div>

                            <div className="p-2">
                                <Comment/>
                                <Comment/>
                                <Comment/>
                                <Comment/>

                            </div>
                            <div className="p-2">

                                <button onClick={this.openModal}>Add Comment</button>

                            </div>


                        </div>
                }
                <Modal
                    style={customStyles}
                    overlayClassName='overlay'
                    isOpen={addComment}
                    onRequestClose={this.closeModal}
                    contentLabel='Modal'
                >


                    <CommentForm/>



                </Modal>


            </div>





        );


    }
}

function mapStateToProps(state, ownProps) {

    return {

        post: state.postDetail,
        hasErrored: state.postDetailErrored,
        isLoading: state.postDetailLoading
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchData: (url) => dispatch(postDetailFetchData(url))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);

