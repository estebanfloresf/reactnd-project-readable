import React from 'react';
import {Link} from 'react-router-dom';




export default function Category({category}) {
    // console.log(category);
    return (


        <div className="p-2">


            <Link className=" btn btn-primary text-capitalize" to={`/categorydetail/${category.name}`}>{category.name} <i className="fa fa-tag"
                                                                                          aria-hidden="true"/></Link>


        </div>
    )


};