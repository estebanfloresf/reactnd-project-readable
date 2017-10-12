import React, {Component} from 'react';
import {connect} from 'react-redux';

import {updateComment,insertComment} from '../../actions/Comment';

class addComment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            authorField: false,
            bodyField: false
        };

    }

    handleChange(field, e) {

        this.props.updateComment(field, e.currentTarget.value);
        if (e.currentTarget.value.trim() === '' && field==='author') {
            this.setState({
                authorField: true
            });
        }

        if (e.currentTarget.value.trim() === '' && field==='body') {
            this.setState({
                bodyField: true
            });
        }
        if (e.currentTarget.value.trim() !== '' && field==='author') {
            this.setState({
                authorField: false
            });
        }
        if (e.currentTarget.value.trim() !== '' && field==='body') {
            this.setState({
                bodyField: false
            });
        }

    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.insertComment(this.props.comment,this.props.postDetail.id);
    }

    render() {
        const {comment} = this.props;
        const {bodyField,authorField} = this.state;
        return (

            <div className="modal fade" id="commentModal" role="dialog" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Comment</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="recipient-name" className="form-control-label">Author:</label>
                                    <input type="text" className="form-control" id="recipient-name" value={comment.author}  onChange={this.handleChange.bind(this, 'author')}/>
                                    {authorField && <div className="text-danger">
                                        <small>You must provide an author</small>
                                    </div>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message-text" className="form-control-label">Your Comment:</label>
                                    <textarea className="form-control" id="message-text" value={comment.body}
                                              onChange={this.handleChange.bind(this, 'body')}/>
                                    {bodyField && <div className="text-danger">
                                        <small>You must provide a comment</small>
                                    </div>}

                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            {bodyField || authorField || comment.author==='' || comment.body===''? <button type="button" className="btn btn-secondary" disabled>Save</button> :
                                <button type="button" className="btn btn-primary" data-dismiss="modal"
                                        onClick={this.handleSubmit.bind(this)}>Save</button>
                            }

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        comment: state.addComment,
        postDetail: state.postDetail
    }

}

const mapDispatchToProps = {
    updateComment,
    insertComment
};

export default connect(mapStateToProps, mapDispatchToProps)(addComment);