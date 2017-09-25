import React from 'react';
import Category from './Category';



export default function ListCategories(categories) {


    return (


        <div className="col-md-12 d-flex flex-wrap">

            {categories && categories.categories.map(
                (category) => {

                    return <Category key={category.name} category={category}/>
                }
            )}



        </div>
    )

}



