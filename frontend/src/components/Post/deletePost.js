import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deletePostData,postDetailFetchData} from "../../actions/Post";
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';


class deletePost extends Component {

    deletePost(post,history){

        this.props.deletePostData(post.id);
        this.props.history.push('/');
    }


    render() {

        const {postToDelete}  = this.props;
        

        return (
            <div>

                <div className="modal fade" id="deletePost" role="dialog" aria-labelledby="deletePost"
                     aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Delete Post</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div>Are you sure you want to delete "<strong>{postToDelete.title}</strong>" </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-light" data-dismiss="modal">Cancel</button>

                                <Link to="/" className="btn btn-danger" data-dismiss="modal" onClick={this.deletePost.bind(this, postToDelete)} >Delete</Link>


                            </div>
                        </div>
                    </div>
                </div>
            </div>



        )
    }



}



function mapStateToProps(state) {
    return {
        postToDelete: state.postToDelete,
        postDeleted: state.deletePostSuccess,
        postDeletedLoading: state.deletePostLoading,
        postDeletedErrored: state.deletePostErrored,


    };
}

const mapDispatchToProps = {
    deletePostData,
    postDetailFetchData

};


export default withRouter( connect(mapStateToProps,mapDispatchToProps)(deletePost));