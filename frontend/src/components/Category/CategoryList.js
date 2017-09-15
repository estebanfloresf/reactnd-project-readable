import React, {Component} from 'react';
// import {Link} from 'react-router-dom'
import Category from './Category'



class ListCategories extends Component {

    render() {
        return (
            <div className="row ">
                <div className="col-md-12">

                    <h4 className="title display-3">Categories</h4>
                </div>
                <div className="col-md-12 d-flex flex-wrap">
                        <Category/>
                        <Category/>
                        <Category/>

                </div>




            </div>
        )
    }

}

export default ListCategories;