import React, {Component} from 'react';
// import {Link} from 'react-router-dom'
import Category from './Category'



class ListCategories extends Component {



    render() {
        return (
            <div className="row ">
                <div className="col-md-12">

                    <p className="title display-3">Categories</p>
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