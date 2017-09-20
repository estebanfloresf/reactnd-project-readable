import React, {Component} from 'react';
import {Link} from 'react-router-dom'


class Category extends Component{

    render(){
        return(
            <div className="p-2">


                        <Link className=" btn btn-primary" to="/categorydetail/:category">Category <i className="fa fa-tag" aria-hidden="true"></i></Link>



            </div>
        )
    }
}

export default Category;