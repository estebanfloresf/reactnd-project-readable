import React, {Component} from 'react';
import {Link} from 'react-router-dom'


class ListCategories extends Component {

    render() {
        return (
            <div className="row ">
                <div className="col-md-12">

                    <h4 className="title">Categories</h4>
                </div>
                <div className="col-md-12 d-flex flex-wrap">

                    <div className="col-md-4">
                        <div className="card">


                            <div className="card-body">
                                <h4 className="card-title">Category</h4>
                                <p className="card-text">Some quick example text to build on the card title and make
                                    up
                                    the
                                    bulk of the card's content.</p>

                                <Link className="btn btn-primary" to="/">View Category</Link>
                            </div>
                        </div>


                    </div>
                    <div className="col-md-4">
                        <div className="card">


                            <div className="card-body">
                                <h4 className="card-title">Category</h4>
                                <p className="card-text">Some quick example text to build on the card title and make
                                    up
                                    the
                                    bulk of the card's content.</p>

                                <Link className="btn btn-primary" to="/">View Category</Link>
                            </div>
                        </div>


                    </div>
                    <div className="col-md-4">
                        <div className="card">


                            <div className="card-body">
                                <h4 className="card-title">Category</h4>
                                <p className="card-text">Some quick example text to build on the card title and make
                                    up
                                    the
                                    bulk of the card's content.</p>

                                <Link className="btn btn-primary" to="/">View Category</Link>
                            </div>
                        </div>


                    </div>
                </div>




            </div>
        )
    }

}

export default ListCategories;