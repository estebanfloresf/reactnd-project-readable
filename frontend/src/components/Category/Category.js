import React, {Component} from 'react';
import {Link} from 'react-router-dom'


class Category extends Component{

    render(){
        return(
            <div className="col-md-4">
                <div className="card">


                    <div className="card-body">
                        <h4 className="card-title">Category</h4>
                        <p className="card-text">Some quick example text to build on the card title and make
                            up
                            the
                            bulk of the card's content.</p>

                        <Link className="btn btn-primary" to="/categorydetail/:category">View Category <i className="fa fa-arrow-circle-right" aria-hidden="true"></i></Link>
                    </div>
                </div>


            </div>
        )
    }
}

export default Category;