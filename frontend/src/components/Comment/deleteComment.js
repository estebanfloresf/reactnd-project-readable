import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deletePostData,postDetailFetchData} from "../../actions/Post";
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';


class deleteComment extends Component {

    deleteComment(post){


    }
    render() {
        const {postToDelete}  = this.props;
        return (
            <div>

                <div className="modal fade" id="deleteComment" role="dialog" aria-labelledby="deleteComment"
                     aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Delete Comment</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div>Are you sure you want to delete "<strong>{postToDelete.title}</strong>" </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-light" data-dismiss="modal">Cancel</button>
                                <button className="btn btn-danger" data-dismiss="modal" onClick={this.deleteComment.bind(this, postToDelete)} >Delete</button>
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

};

export default withRouter( connect(mapStateToProps,mapDispatchToProps)(deleteComment));