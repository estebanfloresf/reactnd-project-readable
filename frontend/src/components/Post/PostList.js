import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Post from './Post';
import {postsFetchData} from "../../actions";
import { connect } from 'react-redux';



class listPosts extends Component {


    componentDidMount() {

        const url = ' http://localhost:3001/posts';
        this.props.fetchData(url)

    }


    render() {

        if(this.props.hasErrored){
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        return (

            <div className="">
                <div className="col-md-12 d-flex flex-rowalign-content-end" id="order">
                    <div className="p-2">
                        <div className="btn-group" role="group">
                            <button id="btnGroupDrop1" type="button"
                                    className="btn btn-outline-info btn-sm dropdown-toggle"                                                  data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                Order By
                            </button>
                            <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                <Link className="dropdown-item" to="/">Date</Link>
                                <Link className="dropdown-item" to="/">Scores</Link>

                            </div>
                        </div>
                    </div>


                    <div className="p-2">
                        <Link className="btn btn-primary btn-sm" to="/addPost/post">Add Post <i
                            className="fa fa-plus-circle" aria-hidden="true"/></Link>
                    </div>


                </div>




                {this.props.posts  && this.props.posts.map((post) => {
                    return <Post key={post.id}  postID={post.id}/>
                })}


            </div>


        )
    }

}


function  mapStateToProps  (state)  {
    return {
        posts: state.posts,
        hasErrored: state.postsErrored,
        isLoading: state.postsLoading
    };
}

function mapDispatchToProps(dispatch){
    return{
        fetchData: (url) => dispatch(postsFetchData(url))
    }
}



export default connect (mapStateToProps,mapDispatchToProps) (listPosts);