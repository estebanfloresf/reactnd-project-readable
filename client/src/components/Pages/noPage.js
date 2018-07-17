import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class noPage extends Component{
    render(){
        return(
            <div className="row">

                <div className="jumbotron">
                    <div className="container">
                        <h1 className="display-3">404 Error Page</h1>
                        <p>The page you requested could not be found, either contact your webmaster or try again. Use your browsers Back button to navigate to the page you have prevously come from</p>
                        <Link to="/" className="btn btn-primary btn-lg">Back to Home Page</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default noPage;